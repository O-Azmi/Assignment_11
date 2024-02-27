import "react"
export type ButtonProps = {
    /**
     * What background color to use
     */
    backgroundColor?: string | undefined;
    /**
     * Button contents
     */
    label: string; 

    /**
     * What size is your button
     */
    size?: string;

    /**
     * What the button looks like disabled
     */
    disabled?: boolean;
    
    /**
    * Optional click handler
    */
    onClick?: () => void;
  }