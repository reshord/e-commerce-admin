'use client'

import React from "react"
import { Dialog, DialogTitle, DialogDescription, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { Input } from "./input"

interface ModalProps {
    title: string
    description: string
    isOpen: boolean
    onClose: () => void
    children?: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({
    title, 
    description, 
    isOpen, 
    onClose, 
    children
}) => {

    const onChange = (open: boolean) => {
        if(!open) {
            onClose()
        }
    }

    return ( 
        <>
            <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                   {description} 
                </DialogDescription>
                
                {children}
            </DialogContent>
        </Dialog>
        </>
     );
}
 
export default Modal