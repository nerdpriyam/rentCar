import React from 'react'

export default function ImageValidators(e) {
    if(e.target.files.length === 1){
        let pic = e.target.files[0]
        if (!["image/jpg","image/jpeg","image/png","image/pdf","image/gif","image/webp"].includes(pic.type))
            return "Pic is not Valid, Please Upload an Image of type .jpg, .jpeg, .png, .pdf, .gif, .webp"
        else if (pic.size > 1048576)
            return "pic is Too Heavy, Please Upload a file within 1MB"
        else 
            return ""
    }
  return ""
}
