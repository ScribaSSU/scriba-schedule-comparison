const url = 'https://scribabot.ml/api/v1.0/departments'

export const getDataDepartments = async () => {
    const res = await fetch(url)
        .then(response => response.json())
        .then(data => data.departmentsList.map((item => {
            return {
                url: item.url,
                shortName: item.shortName,
            }
        })));
    
    return res;
}