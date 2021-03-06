import React, { useEffect } from 'react';

function Parallax(props) {
    useEffect(() => {
        document.getElementById("main").addEventListener("scroll", function myFunction() {
            var scrolltotop = document.getElementById("main").scrollTop
            var target = document.getElementById(props.id)
            var yvalue = scrolltotop * props.factor
            target.style.top = "calc(" + props.top + " + " + yvalue + "px)"
        })

        // return () => {
        //     document.getElementById("main").removeEventListener('scroll', () => { })
        // }
    }, [props.id, props.factor, props.top])

    return <div id={props.id} style={{ width: props.width, height: props.height, zIndex: "-1", position: "absolute", top: props.top, left: props.left, transform: "rotate(" + props.rotate + ")" }}>
        {props.children}
    </div>
}

export default Parallax;