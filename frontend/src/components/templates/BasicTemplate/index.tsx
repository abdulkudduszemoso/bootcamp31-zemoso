import React from "react";

export interface BasicTemplateProps {
    body?: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
}

const BasicTemplate = (props: BasicTemplateProps) => {
    const {body, header, footer} = props
    return (
        <>
            {header}
            {body}
            {footer}
        </>
    )
}

export default BasicTemplate