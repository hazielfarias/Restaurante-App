import axios from  'axios'

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 
        'Bearer ivw6oBZy1dmfa_evVY09cEd6byI88eiAS2voWDyAdeiUyhb0SwGvhyaGjb3r_eAa-kNOtCBhHWhFZZs7JCA_JqmhrMqdHGjuW54GWIm2zsMAbFIgm1NvFm6h8P9fXXYx'
    }

})
