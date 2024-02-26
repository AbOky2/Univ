import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";
import Link from 'next/link';


function Admission(props) {
  return (
    <section>
         <div className='dark:bg-gray-900 bg-gray-200  rounded-lg p-4'>
        <Accordion selectionMode="multiple">
            <AccordionItem key="1" aria-label="Accordion 1" title="Pré-requis" >
               {props.master}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Candidature">
                <Link href={"/admission-inscription"}>                
                {props.candidature}
                </Link>
            </AccordionItem>
        
            
            </Accordion>
        </div>
    </section>
  )
}

export default Admission