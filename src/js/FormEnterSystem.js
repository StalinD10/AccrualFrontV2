const variableFaculty = "https://accrualback.up.railway.app/faculty/withoutToken";

export async function getFaculty() {
    try {
        const response = await fetch(
            `${variableFaculty}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const dataFaculty = await response.json();
        return dataFaculty;
    } catch (error) {
        return error;
    }
}