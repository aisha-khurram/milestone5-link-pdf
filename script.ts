//listing element
const resume=document.getElementById('resume')as HTMLInputElement;
const nameElement=document.getElementById('name')as HTMLInputElement;
const genderElement=document.getElementById('gender')as HTMLInputElement;
const dobElement=document.getElementById('date')as HTMLInputElement;
const emailElement=document.getElementById('email')as HTMLInputElement;
const phoneElement=document.getElementById('phone')as HTMLInputElement;
const addressElement=document.getElementById('address')as HTMLInputElement;
const profileInput=document.getElementById('profilePicture')as HTMLInputElement;
const qualificationElement=document.getElementById('education')as HTMLInputElement;
const experienceElement=document.getElementById('experience')as HTMLInputElement;
const skillsElement=document.getElementById('skills')as HTMLInputElement;

//url creation
const usernameElement=document.getElementById("username")as HTMLInputElement;


resume.addEventListener('submit',function(event){
event.preventDefault();



if(profileInput&& usernameElement && nameElement && genderElement
     && dobElement && emailElement && phoneElement &&addressElement && qualificationElement && 
     experienceElement && skillsElement){
        
    const name=nameElement.value;
    const gender=genderElement.value;
    const dob=dobElement.value;
    const email=emailElement.value;
    const phone=phoneElement.value;
    const address=addressElement.value;
    const qualification=qualificationElement.value;
    const experience=experienceElement.value;
    const skills=skillsElement.value;
    const username=usernameElement.value;
    const uniquPath=`resumes/${username.replace(/\s+/g,'_')}_cv.html`


    const profilePictureFile=profileInput.files?.[0]
    const profilePictureURL=profilePictureFile ? URL.createObjectURL(profilePictureFile):'';
    

    const resumeOutput=`
    <h2>Resume</h2>
    ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture"class="profilePicture">`:''}
    <p><strong>Name:</strong><span id="edit-name" class="editable">${name}</span></p>
    <p><strong>Gender:</strong><span id="edit-gender" class="editable">${gender}</span></p>
    <p><strong>Date of Birth:</strong><span id="edit-dob" class="editable">${dob}</span></p>
    <p><strong>Email address:</strong><span id="edit-email" class="editable">${email}</span></p>
    <p><strong>Mobile No:</strong><span id="edit-phone" class="editable">${phone}</span></p>
    <p><strong>Address:</strong><span id="edit-address" class="editable">${address}</span></p>
    <h3>Qualification</h3>
    <p id="edit-qualification" class="editable">${qualification}</p>
    <h3>Work Experience</h3>
    <p id="edit-experience" class="editable">${experience}</p>
    <h3>Skills</h3>
    <p id="edit-skills" class="editable">${skills}</p>`
    ;
    //link
    const downLoadLink=document.createElement('a')
    downLoadLink.href='data:text/html;charset=UTF-8,' + encodeURIComponent(resumeOutput)
    downLoadLink.download=uniquPath;
    downLoadLink.textContent='Download your Resume';


    const resumeOutputElement=document.getElementById('resumeOutput');
    if(resumeOutputElement){
        resumeOutputElement.innerHTML=resumeOutput;
        makeEditable();
        //link
        resumeOutputElement.appendChild(downLoadLink);
        //pdf
        resumeOutputElement.classList.remove("hidden");
        const buttonContainer=document.createElement("div");
        buttonContainer.id="buttonContainer";
        resumeOutputElement.appendChild(buttonContainer);


        const downloadButton=document.createElement("button");
        downloadButton.textContent="Download as PDF";
        downloadButton.addEventListener("click",()=>{
            window.print();
        });
        buttonContainer.appendChild(downloadButton)

        //shareable link button
        const shareLinkButton=document.createElement("button");
        shareLinkButton.textContent="copy Link";
        shareLinkButton.addEventListener("click", async()=>{
            try{
                const shareableLink=`https://yourdomain.com/resumes/${name.replace(/\s+/g,"_")}_cv.html `;

                await navigator.clipboard.writeText(shareableLink);
                alert("shareable link copied to clipboard");
            }
            catch(err){
                console.error("failed to copy link:", err);
                alert("failed to copy link to clipboard. Please try again");

            }
        });
        buttonContainer.appendChild(shareLinkButton);

    }
    else{
        console.error("resume output container not found");
    }

}else{
    console.error('One or more form elements are missing.')
}



})
function makeEditable(){
    const editableElements=document.querySelectorAll('.editable');
    editableElements.forEach(element=>{
        element.addEventListener('click',function(){
            const currentElement=element as HTMLElement;
            const currentValue=currentElement.textContent||"";
            if(currentElement.tagName==="p" || currentElement.tagName==="span"

            ){
                const input=document.createElement('input')
                input.type='text'
                input.value=currentValue
                input.classList.add('editing-input')

                input.addEventListener('blur',function(){
                    currentElement.textContent=input.value;
                    currentElement.style.display='inline'
                    input.remove()
                })

                currentElement.style.display='none'
                currentElement.parentNode?.insertBefore(input,currentElement)
                input.focus()
            }
        })
    })
}