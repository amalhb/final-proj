import React, { useEffect, useState, useRef } from 'react';
import './ourchefs.css';

const OurChefs = () => {
    const [chefs, setChefs] = useState([]);
    const [loading, setLoading] = useState(true);
    const scrollRef = useRef(null);

    useEffect(() => {
        // Mock data for chefs
        const mockChefs = [
            {
                id: 1,
                name: 'Chef Gordon Ramsay',
                email: 'gordon@example.com',
                phone: '123-456-7890',
                imageUrl: 'https://media.istockphoto.com/id/1298088270/photo/young-beautiful-smiling-woman-chef-with-arms-crossed-at-kitchen.jpg?s=612x612&w=0&k=20&c=ZtYaFLtiRkuA6mQ8HK05xjZNvpb4ev2BS9g2Uc6mdww=',
            },
            {
                id: 2,
                name: 'Chef Jamie Oliver',
                email: 'jamie@example.com',
                phone: '234-567-8901',
                imageUrl: 'https://t4.ftcdn.net/jpg/06/51/28/59/360_F_651285962_gd1R5YDx8We7Nyr5z26eyqpxHIbxRo08.jpg',
            },
            {
                id: 3,
                name: 'Chef Wolfgang Puck',
                email: 'wolfgang@example.com',
                phone: '345-678-9012',
                imageUrl: 'https://womenchefs.org/wp-content/uploads/2023/05/7-Female-Young-Chefs-We-Adore.jpg',
            },
            {
              id: 4,
              name: 'Chef Wolfgang Puck',
              email: 'wolfgang@example.com',
              phone: '345-678-9012',
              imageUrl: 'https://media.istockphoto.com/id/1394055791/photo/portrait-of-confident-black-female-chef-at-restaurant-kitchen-looking-at-camera.jpg?s=612x612&w=0&k=20&c=vmDoulcE99YonSh-W70ZulSn6OV0MXSP_mO1PpYN5kM=',
          }
        ,
        {
          id: 5,
          name: 'Chef Wolfgang Puck',
          email: 'wolfgang@example.com',
          phone: '345-678-9012',
          imageUrl: 'https://st2.depositphotos.com/1518767/10477/i/450/depositphotos_104770408-stock-photo-handsome-chef-in-commercial-kitchen.jpg',
      }
        ];

        // Set mock data and stop loading
        setChefs(mockChefs);
        setLoading(false);
    }, []);

    if (loading) {
        return <div className="text-center text-xl">Loading...</div>; 
    }

    return (
        <div className="bg-gray-100 py-20 overflow-hidden">
            <h2 className="text-4xl font-bold mb-8 animated-heading text-orange-600 times-new-roman text-center">Meet Our Chefs! 👨🍳🍽️</h2>
            <div className="overflow-hidden flex justify-center"> 
                <div
                    ref={scrollRef}
                    className="whitespace-nowrap animate-scroll"
                    style={{ animationDuration: `${chefs.length * 6}s` }} 
                >
                    {chefs.concat(chefs).map((chef) => (
                        <div key={chef.id} className="inline-block bg-white rounded-lg shadow-lg overflow-hidden mx-5 transition-transform transform hover:scale-110 hover:shadow-2xl w-80 h-96">
                            <img 
                                src={chef.imageUrl} 
                                alt={chef.name} 
                                className="w-full h-3/4 object-cover rounded-t-lg" 
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-blue-600">{chef.name}</h3>
                                <p className="text-gray-700">{chef.email}</p>
                                <p className="text-gray-700">{chef.phone}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurChefs;