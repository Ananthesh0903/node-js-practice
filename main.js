//Retrive Check
app.get('/', (req, res) => {
    res.send('Node response sent');
  });
  
  //Retrive all items 
  app.get('/api/products', async(req, res) => {
    try{
      const products = await Product.find({});
       res.status(200).json({products});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
  });
  
  //Retrive single item with ID
  app.get('/api/products/:id', async(req, res) => {
    try{
      const {id}=req.params;
      const products = await Product.findById(id);
      res.status(200).json({products});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
  });
  
  // Updating items by ID
  app.put('/api/products/:id', async(req, res) => {
    try{
      const {id}=req.params;
      const product = await Product.findByIdAndUpdate(id,req.body);
  
      if(!product){
        return res.status(404).json({message:"Product not found"});
      }
  
      const Updatedproduct = await Product.findById(id);
      res.status(200).json({Updatedproduct});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
  });
  //Deletion of an item
  app.delete('/api/products/:id', async(req, res) => {
    try{
      const {id}=req.params;
      const product = await Product.findByIdAndDelete(id,req.body);
  
      if(!product){
        return res.status(404).json({message:"Product not found"});
      }
  
      res.status(200).json({message:"Product deleted sucesfully"});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
  });
  
  //Posting items(Creation)
  app.post('/api/products', async(req, res) => {
    try{
      const product = await Product.create(req.body);
       res.status(200).json({product});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
  });