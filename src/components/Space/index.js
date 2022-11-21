/*
 * @Author: codingfly
 * @Description: 
 * @Date: 2022-11-21 09:03:02
 * @LastEditTime: 2022-11-21 09:11:28
 * @FilePath: \my-website\src\components\Space\index.js
 */
import React from 'react';
import clsx from 'clsx';
import moduleStyles from './styles.module.css';

export default ({
    style,
    children = [<div />, <div />],
    size,
    className,
    margin,
    padding,
    vertical,
    flexWrap,
    justify,
    alignSelf,
    alignItems,
    flex,
    ignoreNum,
    ...restProps
}) => {
    const filterChildren = (children instanceof Array ? children : [children])
        .flat(3)
        ?.map((i) =>
            i?.type?.toString() === 'Symbol(react.fragment)' ? i.props.children : i,
        )
        ?.flat(3)
        ?.filter?.(i => ![undefined, true, false].includes(i));
    const getStyle = () => {
        let styles = {};
        if (vertical) {
            styles['lineHeight'] = 1;
        }
        if (flex) {
            styles['flex'] = flex;
        }
        if (justify) {
            styles['justifyContent'] = justify;
        }
        if (margin) {
            styles['margin'] = margin;
        }
        if (padding) {
            styles['padding'] = padding;
        }
        if (alignSelf) {
            styles['alignSelf'] = alignSelf;
        }
        if (alignItems) {
            styles['alignItems'] = alignItems;
        }
        if (flexWrap) {
            styles['flexWrap'] = flexWrap;
        }
        return { ...styles, ...style };
    };
    return (
        <div
            style={getStyle()}
            className={clsx(
                moduleStyles.space,
                vertical && moduleStyles.vertical,
                className,
            )}
            {...restProps}
        >
            {filterChildren?.map?.((item, index) => {
                item = React.isValidElement(item) ? (
                    item
                ) : (
                    <div key={index}>{item}</div>
                );
                const props = (item).props;
                return React.cloneElement(item, {
                    ...props,
                    key: index,
                    style: {
                        [vertical ? 'marginBottom' : 'marginRight']:
                            index + 1 === filterChildren?.length ||
                                (ignoreNum && index && (index + 1) % ignoreNum === 0)
                                ? undefined
                                : typeof size === 'number'
                                    ? size
                                    : size?.toUpperCase(),
                        ...props.style,
                    },
                });
            })}
        </div>
    );
};