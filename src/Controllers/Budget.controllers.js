 import {PrismaClient}  from '@prisma/client'
 const client = new PrismaClient();

 //create budget
 const createBudget = async (req,res)=>{
    const {title,quantity,price} = req.body;
    

  
    try{
        const newBudget=await client.budget.create({
            data:{
                title,
                quantity,
                price,
            }
        })
    
        res.status(201).json({message:"contact created sucessfully",data:newBudget});
    }
    catch(e){
        res.status(500).json({message:"server error"});
    }
    
}

//get all contact
const getAllContacts = async (req,res)=>{

    try{
     const allBudgets=await client.budget.findMany();

     if(allBudgets.length <= 0){
    res.status(201).json({message:"Empty budget"})
return;
    }
    res.status(200).json({data:allBudgets})
}

    catch(e){
        res.status(500).json({message:"could not get all contacts"});
    }
}

//get single budget

const getSingleBudget = async (req,res)=>{

    const title = req.params.title;
 try{
const budgetItem = await client.budget.findFirst({
    where:{title:title}
})
if(!budgetItem){
    res.status(404).json({message:`budget with title ${title} not found`})
    return;
}
res.status(200).json({data:budgetItem});
 }
 catch(e){
    res.status().json({message:"could not find budget"})
 }
}

//update budget

const updateBudget = async (req,res)=>{
    const {title,quantity,price} = req.body;
    const Title = req.params.title;
    let updateBudget

 try{
    if(title){
        updateBudget = await client.budget.update({
            where:{title:Title},
            data:{
                title:title
            }

        })
        
    }
    if(quantity){
        updateBudget =await client.budget.update({
            where:{title:Title},
            data:{
                quantity:quantity
            }

        })
    }
    if(price){
        updateBudget = await client.budget.update({
            where:{title:Title},
            data:{
                price:price
            }

        })
    }

    res.status(200).json({message:"user updates successfully",data:updateBudget})

 }
 catch(e){
    res.status()
 }
}

//delete budget
const deleteBudget = async (req,res)=>{
    const title= req.params.title
    try{
    await client.budget.delete({
        where:{title:title},
    })
    res.status(200).json({message:"budget was deleted successfully"})

    }
    catch(e){
        res.status(500).json({message:`coulld not delete budget ${title}`})
    }
}


export {createBudget,getAllContacts,getSingleBudget,updateBudget,deleteBudget}



 


