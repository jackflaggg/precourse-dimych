let student = {
    personalData: {
        firstName: 'Rasul',
        lastName: 'Ivanov',
    },
    address: {
        county: 'Russia',
        city: 'UFA',
    }
};

student.address.city = 'Salavat';

document.write('<b>Personal DATA:</b> ', student.personalData.firstName, '<br>');
document.write('<b>lastName:</b> ', student.personalData.lastName, '<br>');
document.write('<b>country:</b> ', student.address.county, '<br>');
document.write('<b>city:</b> ', student.address.city, '<br>');