import React from 'react'
import render from 'react-test-renderer'
import { ProductTitle } from '../../src/components'
import { ProductCard } from '../../src/components/ProductCard'
import { product1 } from '../data/products'

describe('ProductTitle', () => {
    test('debe mostrar el componente correctamente con el titulo personalizado', () => {
        const wrapper = render.create(
            <ProductTitle title='Custom Product' className='custom-class' />
        )

        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('debe mostrar el componente con el nombre del producto', () => {
        const wrapper = render.create(
            <ProductCard product={product1}>
                {() => (<ProductTitle />
                )}
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    })
})