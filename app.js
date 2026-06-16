const params =
new URLSearchParams(
    window.location.search
);

const editId =
params.get("id");

(function () {

    const canteenData = {
        organization: {},
        subsidiary: {},
        location: {},
        mealDetails: {},
        // here to change
        mealConfig: {
            dayOfWeek: "",
            mealTitle: "",
            mealsServed: "",
            fromTime: "",
            toTime: "",
            rate: 0,
            subsidyPercentage: 0
        },
        employeeConsumption: {},
        specialDays: {}
    };

    const topOrg =
        document.getElementById("top-org");

    const topCanteen =
        document.getElementById("top-canteen");

    const topCanteenData =
        document.getElementById("top-canteen-data");

    const topEmployee =
        document.getElementById("top-employee");

    const topEmployeeData =
        document.getElementById("top-employee-data");

    const orgSidebar =
        document.getElementById("org-sidebar");

    const canteenSidebar =
        document.getElementById("canteen-sidebar");

    const canteenSidebarData = document.getElementById("canteen-sidebar-data");

    const employeeSidebar =
        document.getElementById("employee-sidebar");

    const employeeSidebarData =
        document.getElementById("employee-sidebar-data");

    const backBtn =
        document.getElementById("nav-back");

    const nextBtn =
        document.getElementById("nav-next");

    const allModules =
        document.querySelectorAll(".module");

    let currentModule = 0;

    function showModule(index) {

        allModules.forEach((module, i) => {

            module.classList.toggle(
                "hidden",
                i !== index
            );

        });

        currentModule = index;

        updateSidebar();
        updateButtons();
        updateTopTabs();
    }

    function updateButtons() {

        backBtn.style.visibility =
            currentModule === 0
                ? "hidden"
                : "visible";

        nextBtn.innerText =
            currentModule === 4  // last module index (next module employee_meals_consumption -> 3)
                ? "Save"
                : "Next";

    }

    function updateTopTabs() {

       if (currentModule === 0) {

        topOrg.classList.add(
            "text-blue-600",
            "border-blue-500"
        );

        topOrg.classList.remove(
            "text-gray-900",
            "border-transparent"
        );

        topCanteen.classList.remove(
            "text-blue-600",
            "border-blue-500"
        );

        topCanteen.classList.add(
            "text-gray-900",
            "border-transparent"
        );

    } else {

        topCanteen.classList.add(
            "text-blue-600",
            "border-blue-500"
        );

        topCanteen.classList.remove(
            "text-gray-900",
            "border-transparent"
        );

        topOrg.classList.remove(
            "text-blue-600",
            "border-blue-500"
        );

        topOrg.classList.add(
            "text-gray-900",
            "border-transparent"
        );

    }       

    }

    function updateSidebar() {

        document
            .querySelectorAll(
                "#org-sidebar button"
            )
            .forEach(btn => {

                btn.classList.remove(
                    "bg-blue-100",
                    "text-blue-900"
                );

                btn.classList.add(
                    "text-gray-700"
                );

                if (
                    Number(
                        btn.dataset.module
                    ) === currentModule
                ) {

                    btn.classList.add(
                        "bg-blue-100",
                        "text-blue-900"
                    );

                }

            });

        document
            .querySelectorAll(
                "#canteen-sidebar button"
            )
            .forEach(btn => {

                btn.classList.remove(
                    "bg-blue-100",
                    "text-blue-900"
                );

                btn.classList.add(
                    "text-gray-700"
                );

                if (
                    Number(
                        btn.dataset.module
                    ) === currentModule
                ) {

                    btn.classList.add(
                        "bg-blue-100",
                        "text-blue-900"
                    );

                }

            });

    }

    function switchToOrg() {

        orgSidebar.classList.remove(
            "hidden"
        );

        canteenSidebar.classList.add(
            "hidden"
        );

        showModule(0);

    }

    function switchToCanteen() {

        canteenSidebar.classList.remove(
            "hidden"
        );

        orgSidebar.classList.add(
            "hidden"
        );

        showModule(1);

    }

    topOrg.addEventListener(
        "click",
        switchToOrg
    );

    topCanteen.addEventListener(
        "click",
        switchToCanteen
    );

    document
        .querySelectorAll(
            "#org-sidebar button"
        )
        .forEach(btn => {

            btn.addEventListener(
                "click",
                () => {

                    showModule(
                        Number(
                            btn.dataset.module
                        )
                    );

                }
            );

        });

    document
        .querySelectorAll(
            "#canteen-sidebar button"
        )
        .forEach(btn => {

            btn.addEventListener(
                "click",
                () => {

                    showModule(
                        Number(
                            btn.dataset.module
                        )
                    );

                }
            );

        });

  backBtn.addEventListener(
    "click",
    () => {

        if (currentModule > 0) {

            showModule(
                currentModule - 1
            );

            if (
                currentModule === 0
            ) {

                orgSidebar.classList.remove(
                    "hidden"
                );

                canteenSidebar.classList.add(
                    "hidden"
                );

            } else {

                canteenSidebar.classList.remove(
                    "hidden"
                );

                orgSidebar.classList.add(
                    "hidden"
                );

            }

        }

    }
);

nextBtn.addEventListener("click", () => {
console.log("Current Module:", currentModule);
if (currentModule === 0) {

    const orgCode =
    document.getElementById("organizationCode");

    const subCode =
    document.getElementById("subsidiaryCode");

    const locCode =
    document.getElementById("locationCode");

    if(orgCode.value.trim() === ""){
        orgCode.classList.add("border-red-500");
        orgCode.focus();
        return;
    }

    if(subCode.value.trim() === ""){
        subCode.classList.add("border-red-500");
        subCode.focus();
        return;
    }

    if(locCode.value.trim() === ""){
        locCode.classList.add("border-red-500");
        locCode.focus();
        return;
    }

    showModule(1);

    canteenSidebar.classList.remove("hidden");
    orgSidebar.classList.add("hidden");

    return;
}

if(currentModule === 1){

    const mealTitle =
    document.getElementById("mealTitle");

    if(mealTitle.value.trim() === ""){

        mealTitle.classList.add("border-red-500");

        document
        .getElementById("mealTitleError")
        .classList.remove("hidden");

        mealTitle.focus();

        return;
    }

    showModule(2);
    return;
}
//  change here
if(currentModule === 2){

    const mealTitle =
    document.getElementById(
        "mealTitle"
    );

    if(
        mealTitle.value.trim() === ""
    ){

        mealTitle.classList.add(
            "border-red-500"
        );

        document
        .getElementById(
            "mealTitleError"
        )
        .classList.remove(
            "hidden"
        );

        mealTitle.focus();

        return;
    }

    showModule(3);

    return;
}

if(currentModule === 3){

    const employeeId =
    document.getElementById(
        "employeeId"
    );

    const consumptionDate =
    document.getElementById(
        "consumptionDate"
    );

    const mealConsumed =
    document.getElementById(
        "mealConsumed"
    );

    const numberOfTimes =
    document.getElementById(
        "numberOfTimes"
    );

    if(employeeId.value.trim() === ""){
        employeeId.classList.add("border-red-500");
        employeeId.focus();
        return;
    }

    if(consumptionDate.value === ""){
        consumptionDate.classList.add("border-red-500");
        consumptionDate.focus();
        return;
    }

    if(mealConsumed.value.trim() === ""){
        mealConsumed.classList.add("border-red-500");
        mealConsumed.focus();
        return;
    }

    if(numberOfTimes.value === ""){
        numberOfTimes.classList.add("border-red-500");
        numberOfTimes.focus();
        return;
    }

    showModule(4);

    return;
}

if(currentModule === 4){

    const specialDay =
    document.getElementById(
        "specialDay"
    );

    const specialDate =
    document.getElementById(
        "specialDate"
    );

    if(
        specialDay.value.trim() === ""
    ){

        specialDay.classList.add(
            "border-red-500"
        );

        specialDay.focus();

        return;
    }

    if(
        specialDate.value === ""
    ){

        specialDate.classList.add(
            "border-red-500"
        );

        specialDate.focus();

        return;
    }
}

// SAVE LOGIC

(async () => {

    try {


        console.log("Saving Record...");
        await saveOrganization();

        await saveMealDetails();
        console.log("Record Saved");

        localStorage.removeItem(
            "canteenData"
        );

        alert(
            "Record Saved Successfully"
        );

        window.location.href =
            "./index.html";

    }
    catch(err){

        console.error(
            "Save Error:",
            err
        );

    }

})();
}); // <-- VERY IMPORTANT

    // ===============================
// DYNAMIC FORM DATA COLLECTION
// ===============================

document
    .querySelectorAll("[data-section]")
    .forEach(field => {

        field.addEventListener(
            "input",
            updateFormData
        );

        field.addEventListener(
            "change",
            updateFormData
        );

    });

function updateFormData() {

    const section =
        this.dataset.section;

    const field =
        this.dataset.field;

    let value = this.value;

    if (this.type === "number") {

        value =
            value === ""
                ? 0
                : Number(value);

    }

    canteenData[section][field] =
        value;

    localStorage.setItem(
        "canteenData",
        JSON.stringify(canteenData)
    );

}

// ===============================
// RESTORE SAVED DATA
// ===============================

const savedData =
    localStorage.getItem(
        "canteenData"
    );

if (savedData) {

    Object.assign(
        canteenData,
        JSON.parse(savedData)
    );

    console.log(
        "Restored Data:",
        canteenData
    );

}

/* ===========================
   EDIT RECORD FUNCTIONS
=========================== */

async function loadRecordForEdit(){

    try{

      const records =
JSON.parse(
localStorage.getItem(
"canteenRecords"
)
) || [];

const record =
records.find(
r => r._id === editId
);

if(!record) return;


        canteenData.organization =
        record.organization || {};

        canteenData.subsidiary =
        record.subsidiary || {};

        canteenData.location =
        record.location || {};

    
        // canteenData.mealTimings =
        // record.mealTimings || {};

        // canteenData.subsidy =
        // record.subsidy || {};

        // canteenData.employeeConsumption =
        // record.employeeConsumption || {};

        // canteenData.specialDays =
        // record.specialDays || {};
      
        canteenData.mealDetails =
        record.mealDetails || {};

        canteenData.mealConfig =
        record.mealConfig || {};

        canteenData.employeeConsumption =
        record.employeeConsumption || {};

        canteenData.specialDays =
        record.specialDays || {};

        populateForm();

    }
    catch(err){

        console.error(
            "Edit Load Error:",
            err
        );

    }

}

function populateForm(){

    document
    .querySelectorAll("[data-section]")
    .forEach(field => {

        const section =
        field.dataset.section;

        const key =
        field.dataset.field;

        if(
            canteenData[section] &&
            canteenData[section][key] !==
            undefined
        ){

            field.value =
            canteenData[section][key];

        }

    });

}



// ===============================
// INITIAL LOAD
// ===============================

orgSidebar.classList.remove(
    "hidden"
);

canteenSidebar.classList.add(
    "hidden"
);

if(editId){

    loadRecordForEdit();

}

async function saveOrganization() {

    let records =
    JSON.parse(
        localStorage.getItem("canteenRecords")
    ) || [];

    let id =
    editId || Date.now().toString();

    const record = {

        _id: id,

        organization:
        canteenData.organization,

        subsidiary:
        canteenData.subsidiary,

        location:
        canteenData.location

    };

    const existingIndex =
    records.findIndex(
        r => r._id === id
    );

    if(existingIndex >= 0){

        records[existingIndex] = {
            ...records[existingIndex],
            ...record
        };

    }else{

        records.push(record);

    }

    localStorage.setItem(
        "canteenRecords",
        JSON.stringify(records)
    );

    localStorage.setItem(
        "canteenId",
        id
    );

    return record;
}


async function saveMealDetails(){

  

    let records =
    JSON.parse(
        localStorage.getItem("canteenRecords")
    ) || [];

    const id =
    localStorage.getItem(
        "canteenId"
    );

    const index =
    records.findIndex(
        r => r._id === id
    );

    if(index >= 0){

        records[index].mealDetails =
        canteenData.mealDetails;

        records[index].mealConfig =
        canteenData.mealConfig;

        records[index].employeeConsumption =
        canteenData.employeeConsumption;

        records[index].specialDays =
        canteenData.specialDays;

        localStorage.setItem(
            "canteenRecords",
            JSON.stringify(records)
        );

    }

    return true;
}
function setupRequiredFieldValidation(){

    [
        "organizationCode",
        "subsidiaryCode",
        "locationCode",
        "mealTitle",
        "employeeId",
        "consumptionDate",
        "mealConsumed",
        "numberOfTimes",
        "specialDay",
        "specialDate"
    ].forEach(id => {

        const field =
        document.getElementById(id);

        if(!field) return;

        field.addEventListener(
            "input",
            function(){

                if(
                    this.value.trim() !== ""
                ){

                    this.classList.remove(
                        "border-red-500"
                    );

                }

            }
        );

    });

}

setupRequiredFieldValidation();
showModule(0);

})();

