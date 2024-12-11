 const asyncHandler = (requestHandler) => {
    () => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err) )
    }
 }

export {asyncHandler}






// OTHER METHOD TO BUILD WRAPPER
// const asyncHandler = (fn) => async (req, res, next) => {
//     try{

//     } catch(error){
//         res.status(err.code || 500).json({
//             success: false,
//             message:err.message
//         })
//     }
// }