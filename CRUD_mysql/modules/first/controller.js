const { getData, setData } = require("./service");

const getFirstData=async(req,res)=>{

    try{
        let results = await getData();
        res.status(200).send({data:results});
    }catch(err){
        console.log('!! Err:',err)
        res.status(500).send({message:'Server Error'});
    }

}

const setFirstData=async(req,res)=>{

    try{
        
        const params = [req?.query?.name,req?.query?.status];

        let results = await setData(params);
        res.status(200).send({data:results});
    }catch(err){
        console.log('!! Err:',err)
        res.status(500).send({message:'Server Error'});
    }

}

module.exports={getFirstData,setFirstData}