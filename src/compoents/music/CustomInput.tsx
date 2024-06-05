import React, { forwardRef, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';

type InputAttrs = React.JSX.IntrinsicElements['input']

const CustomInput = forwardRef<HTMLInputElement, InputAttrs>(function CustomInput(props, ref) {
    useEffect(() => {
        console.log(ref.current, 'child ref~~')
    }, [])
    return (
        <Box className="customInputContainer">
            <input ref={ref} {...props} />
        </Box>
    );
})

function Page() {
    const input = useRef<HTMLInputElement>(null!);
    console.log(input.current, 'input.current~~')
    return (
        <>
            <CustomInput ref={input} defaultValue={1111} />
            <button onClick={
                () => input.current.focus()
            }>聚焦</button>
        </>
    )
}

export default Page;
