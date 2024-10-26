import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import { createContext, useContext, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Create the context
export const AppContext = createContext();

// Define the provider component
const AppContextProvider = (props) => {
    const [credit, setCredit] = useState(false);
    const [image, setImage] = useState(false);
    const navigate = useNavigate();
    const [resultImage, setResultImage] = useState(false);

    const backendurl = import.meta.env.VITE_BACKEND_URL;

    const { getToken } = useAuth();
    const { isSignedIn } = useUser();
    const { openSignIn } = useClerk();

    const loadCreditData = async () => {
        try {
            const token = await getToken();
            const { data } = await axios.get(backendurl + '/api/user/credits', { headers: { token } })
            if (data.success) {
                setCredit(data.credits)
                console.log(data.credits)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const removeBg = async (image) => {
        try {
            if (!isSignedIn) {
                return openSignIn()
            }
            setImage(image)
            setResultImage(false)
            navigate('/result')

            const token = await getToken();

            const formData = new FormData();

            image && formData.append('image', image)

            const { data } = await axios.post(backendurl + '/api/image/remove-bg', formData, { headers: { token } })

            if (data.success) {
                setResultImage(data.resultImage)
                data.creditBalance && setCredit(data?.creditBalance)
            } else {
                toast.error(data.message)
                data.creditBalance && setCredit(data?.creditBalance)

                if (data.creditBalance === 0) {
                    navigate('/buy')
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    const value = {
        credit, setCredit, loadCreditData, backendurl, image, setImage, removeBg,resultImage,setResultImage
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;