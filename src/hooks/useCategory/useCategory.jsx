import { useEffect, useState } from "react";


const useCategory = () => {
    
         const [nature, setNature] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://airbnb-mern-project-server.vercel.app/category')
            .then(res => res.json())
            .then(data => {
                setNature(data);
                setLoading(false);
            });
    }, [])
     return [nature, loading]
};

export default useCategory;