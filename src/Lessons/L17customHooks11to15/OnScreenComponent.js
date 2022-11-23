import React, { useRef } from 'react'
import useOnScreen from './useOnScreen'

export default function OnScreenComponent() {
    const headerTwoRef = useRef()
    const visible = useOnScreen(headerTwoRef, '-200px')
    return (
        <>
            <h1>Header</h1>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae obcaecati fugiat adipisci impedit sequi, laudantium tenetur illo dignissimos sit neque, ad quis molestias, nemo deserunt magnam expedita. Aperiam quasi quam numquam temporibus alias laboriosam, corrupti et dolores veritatis autem ad distinctio suscipit a praesentium libero odit? Praesentium unde natus provident laudantium ab explicabo enim suscipit fugiat, nemo corrupti aliquam ratione quidem debitis libero quos ex excepturi itaque, sunt nobis commodi minima vitae. Debitis necessitatibus, dolorem ipsa, repellendus quidem eum magnam repellat accusamus cum doloremque natus iste, praesentium eveniet quas dicta ut asperiores laudantium. Consequuntur dicta ea velit fugiat repudiandae!
            </div>
            <h1 ref={headerTwoRef}>Header 2 {visible && '(Visible)'}</h1>
            <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui voluptatum, possimus ratione ex provident quas tempore sunt nemo, deleniti totam in! Est aspernatur cumque excepturi accusantium et qui saepe aliquid ut quos doloribus! Eveniet officia accusamus repellendus nostrum tempore. Quidem eos animi, excepturi earum tenetur nobis, reiciendis soluta hic quia, error voluptatum veritatis? A veritatis nemo unde eos officiis. Molestiae numquam ipsum sit fugit repellendus hic perspiciatis a? Quam voluptate culpa aperiam numquam debitis sapiente, perspiciatis natus velit cumque delectus minus nihil neque, quae id quasi aliquam quaerat itaque repellat optio! Consequuntur eius ex at eaque provident consequatur cumque alias.
            </div>
        </>
    )
}
