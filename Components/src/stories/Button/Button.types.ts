import "react"
export type ButtonProps = {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * Button contents
     */
    label: string;
  }