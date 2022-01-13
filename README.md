# oscar-product-card

Este es un paquete de pruebas de despliegue de NPM

### Oscar Caballero

## Ejemplo

```
import { ProductCard, ProductImage, ProductButtons, ProductTitle } from '../components';

```

```
 <ProductCard product={product} style={{ backgroundColor: '#70D1F8' }} onChange={onProductCountChange} key={key} value={shoppingCart[product.id]?.count || 0} initialValues={{ count: 4, maxCount: 10 }}>
                        {({ reset, count, increaseBy, isMaxCountReached, maxCount }) => <>
                            <ProductImage />
                            <ProductTitle />
                            <ProductButtons />
                            <button onClick={reset}>reset</button>
                            <button onClick={() => increaseBy(-2)}>-2</button>
                            {(!isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>
                            )}
                            <span>{count} - {maxCount}</span>
                        </>}
                    </ProductCard>
```
