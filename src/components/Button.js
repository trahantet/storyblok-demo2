import Link from "next/link";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
 
const Button = ({ blok }) => {

  return (
    <div {...storyblokEditable(blok)}>
    
          {/* <div className="flex justify-evenly content-center ml-[15%]"> */}
           
              
                <button
                  
                  className="bg-white border-2 border-black w-2/12 h-12 px-[2%] "
                >
                  <Link className="" href={`${blok.Link.url}`} target="_blank">
                  {blok.button_text}
                  </Link>
                </button>
         
            
          {/* </div> */}
        
      
 
</div>
  );
};
 
export default Button;