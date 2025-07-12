
import { useFormState } from "react-dom";


export default function Submit(){

    const { pending} = useFormState();

    
    return(
        <p className='actions'>
            <button type="submit" disabled={pending}>
            {pending ? 'Submitting...': 'Submit'}
            </button>
        </p>

    );

}