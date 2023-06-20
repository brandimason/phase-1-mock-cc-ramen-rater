// write your code here


//Step 1
//Fetch Requests - link the ramen data to the webpage
fetch('http://localhost:3000/ramens')
.then(res => res.json())
// recieving data and pushing all ramen to displayRamen
.then(allRamen => displayRamen(allRamen))

// see all ramen images in nav bar
    // add ramen to #ramen-menu div 
function displayRamen(allRamen) {
    // console.log(allRamen)
    allRamen.forEach((singleRamen) => {
        // create image element
        const image = document.createElement("img")
        // populate image element with ramen image
        image.src = singleRamen.image
        // console.log(image)
        // click on the image from the #ramen-menu div & see all the info about the ramen (add event listener to the image)
        image.addEventListener('click', function(){
            // the function will show me all the details about the ramen - i need to create a new function to reference here
            allRamen.forEach((singleRamen))
        })
        // append image to dom, add ramen to #ramen-menu div
        document.querySelector("#ramen-menu").append(image)

    //     const img = document.createElement("img")
    //     img.src = r.image
    //     const newimage = document.querySelector('#ramen-menu')
    //     newimage.append(img)
    })
}
//function to add ramen detail into #ramen-detail
function displyRamenDetail(allRamen){
    //

}



// click on the image from the #ramen-menu div & reference all the information from the 

//see all the info from the ramen image in the #ramen-detail

// 

   