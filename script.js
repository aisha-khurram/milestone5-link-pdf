var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//listing element
var resume = document.getElementById('resume');
var nameElement = document.getElementById('name');
var genderElement = document.getElementById('gender');
var dobElement = document.getElementById('date');
var emailElement = document.getElementById('email');
var phoneElement = document.getElementById('phone');
var addressElement = document.getElementById('address');
var profileInput = document.getElementById('profilePicture');
var qualificationElement = document.getElementById('education');
var experienceElement = document.getElementById('experience');
var skillsElement = document.getElementById('skills');
//url creation
var usernameElement = document.getElementById("username");
resume.addEventListener('submit', function (event) {
    var _this = this;
    var _a;
    event.preventDefault();
    if (profileInput && usernameElement && nameElement && genderElement
        && dobElement && emailElement && phoneElement && addressElement && qualificationElement &&
        experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var gender = genderElement.value;
        var dob = dobElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var qualification = qualificationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username = usernameElement.value;
        var uniquPath = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        var profilePictureFile = (_a = profileInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        var resumeOutput = "\n    <h2>Resume</h2>\n    ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\"class=\"profilePicture\">") : '', "\n    <p><strong>Name:</strong><span id=\"edit-name\" class=\"editable\">").concat(name_1, "</span></p>\n    <p><strong>Gender:</strong><span id=\"edit-gender\" class=\"editable\">").concat(gender, "</span></p>\n    <p><strong>Date of Birth:</strong><span id=\"edit-dob\" class=\"editable\">").concat(dob, "</span></p>\n    <p><strong>Email address:</strong><span id=\"edit-email\" class=\"editable\">").concat(email, "</span></p>\n    <p><strong>Mobile No:</strong><span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></p>\n    <p><strong>Address:</strong><span id=\"edit-address\" class=\"editable\">").concat(address, "</span></p>\n    <h3>Qualification</h3>\n    <p id=\"edit-qualification\" class=\"editable\">").concat(qualification, "</p>\n    <h3>Work Experience</h3>\n    <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n    <h3>Skills</h3>\n    <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>");
        //link
        var downLoadLink = document.createElement('a');
        downLoadLink.href = 'data:text/html;charset=UTF-8,' + encodeURIComponent(resumeOutput);
        downLoadLink.download = uniquPath;
        downLoadLink.textContent = 'Download your Resume';
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
            //link
            resumeOutputElement.appendChild(downLoadLink);
            //pdf
            resumeOutputElement.classList.remove("hidden");
            var buttonContainer = document.createElement("div");
            buttonContainer.id = "buttonContainer";
            resumeOutputElement.appendChild(buttonContainer);
            var downloadButton = document.createElement("button");
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener("click", function () {
                window.print();
            });
            buttonContainer.appendChild(downloadButton);
            //shareable link button
            var shareLinkButton = document.createElement("button");
            shareLinkButton.textContent = "copy Link";
            shareLinkButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                var shareableLink, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            shareableLink = "https://yourdomain.com/resumes/".concat(name_1.replace(/\s+/g, "_"), "_cv.html ");
                            return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                        case 1:
                            _a.sent();
                            alert("shareable link copied to clipboard");
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            console.error("failed to copy link:", err_1);
                            alert("failed to copy link to clipboard. Please try again");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            buttonContainer.appendChild(shareLinkButton);
        }
        else {
            console.error("resume output container not found");
        }
    }
    else {
        console.error('One or more form elements are missing.');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "p" || currentElement.tagName === "span") {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
