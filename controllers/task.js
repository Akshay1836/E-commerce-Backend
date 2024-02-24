const Products = require("../model/model");

const getTasks = async (req, res) => {
  const result = await Products.find({});
  res.status(200).json({ result, length: result.length });
};
const getAllTasks = async (req, res) => {
  // const {name}=req.query;
  // console.log(name)
  // const result=await Products.find({name})
  // const res1=await Products.find({})
  // if(name){
  //         console.log(name)
  //         return res.status(200).json({result,length:result.length})
  // }
  //         res.status(200).json({res1,length:res1.length})

  //name finding by destructuring

  // const result= await Products.find({
  //   name:{
  //     $regex:name,$options:"i"
  //   }
  // })
  const { featured, name, company, sort } = req.query;

  const object = {};
  if (featured) {
    object.featured = featured === "true" ? true : false;
    console.log(object);
  }
  if (company) {
    object.company = company;
  }
  if (name) {
    object.name = {
      $regex: name,
      $options: "i",
    };
  }

  //Mentorow method for sorting

  // let result= Products.find(object)
  // console.log(result);
  // if (sort) {
  //   const sortList=sort.split(',').join(' ');
  //   result=result.sort(sortList)
  // }
  // const products=await result;
  // res.status(200).json({ products, total: result.length });

  //Mthod 2 for sorting::
  if (sort) {
    const sortList = sort.split(",").join(" ");
    const result = await Products.find(object).sort(sortList);
    return res.status(200).json({ result, total: result.length });
  }

  const products = await Products.find(object);
  res.status(200).json({ products, total: products.length });
};

//another method
const getAllTasks2 = async (req, res) => {
  const { featured, name, company, sort } = req.query;
  const object = {};

  if (featured) {
    object.featured = featured === "true" ? true : false;
    console.log(object);
  }
  if (company) {
    object.company = company;
  }
  if (name) {
    object.name = {
      $regex: name,
      $options: "i",
    };
  }

  if (sort) {
    // Method 1: Apply sorting directly within the find() method
    const sortObj = {};
    sort.split(",").forEach((sortField) => {
      const [field, order] = sortField.split(":");
      sortObj[field] = order === "asc" ? 1 : -1;
    });
    const result = await Products.find(object).sort(sortObj); // Await the toArray() method
    console.log(result);
    return res.status(200).json({ result, total: result.length });
  }

  const products = await Products.find(object); // Await the toArray() method
  res.status(200).json({ products, total: products.length });
};

const getAllTasks3 = async (req, res) => {
  const { name } = req.query;
  const result =await Products.find({
    name: {
      $regex: name,
      $options: "i",
    },
  });
  res.status(200).json({ result, len: result.length });
};

module.exports = { getTasks, getAllTasks, getAllTasks2, getAllTasks3 };
