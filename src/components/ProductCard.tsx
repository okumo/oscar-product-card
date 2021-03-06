import styles from '../styles/styles.module.css';
import { CustomProductHook as useProduct } from '../hooks/CustomProductHook';
import React, { createContext, CSSProperties, } from 'react';
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext

export interface Props {
    product: Product,
    //children: ReactElement | ReactElement[],
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {
    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });
    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children({
                    count: counter,
                    isMaxCountReached,
                    increaseBy,
                    product,
                    reset,

                })}
            </div>
        </Provider>

    )
}