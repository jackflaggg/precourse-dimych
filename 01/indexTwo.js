let student = {
    info: {
        firstName: 'Rasul',
        lastName: 'Ivanov',
    },
    address: {
        county: 'Russia',
        city: 'UFA',
    }
};

document.write('<b>firstName:</b> ', student.info.firstName, '<br>');
document.write('<b>lastName:</b> ', student.info.lastName, '<br>');
document.write('<b>country:</b> ', student.address.county, '<br>');
document.write('<b>city:</b> ', student.address.city, '<br>');