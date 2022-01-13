import React from 'react'
import render, { act } from 'react-test-renderer'
import { ProductTitle } from '../../src/components'
import { ProductCard } from '../../src/components/ProductCard'
import { product1 } from '../data/products'

describe('ProductImage', () => {
    test('debe mostrar el componente correctamente', () => {
        const wrapper = render.create(
            <ProductCard product={product1}>
                {() => (
                    <ProductTitle />
                )}
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('debe incrementar el contador', () => {
        const wrapper = render.create(
            <ProductCard product={product1}>
                {({ reset, increaseBy, count }) =>
                    <>
                        <ProductTitle />
                        <button onClick={reset}>reset</button>
                        <button onClick={() => increaseBy(+1)}>+1</button>
                        <span>{count}</span>
                    </>
                }
            </ProductCard>
        )

        let tree = wrapper.toJSON();
        expect(tree).toMatchSnapshot();

        act(() => {
            (tree as any).children[2].props.onClick()
        })

        tree = wrapper.toJSON()
        expect((tree as any).children[3].children[0]).toBe("1")
    })

})