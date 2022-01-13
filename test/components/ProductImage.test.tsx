import React from 'react'
import render from 'react-test-renderer'
import { ProductImage } from '../../src/components'
import { ProductCard } from '../../src/components/ProductCard'
import { product2 } from '../data/products'

describe('ProductImage', () => {
    test('debe mostrar la imagen del producto', () => {
        const wrapper = render.create(
            <ProductImage img={product2.img} className='custom-class' />
        )

        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('debe mostrar el componente con la imagen del producto', () => {
        const wrapper = render.create(
            <ProductCard product={product2}>
                {() => (<ProductImage />
                )}
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    })
})