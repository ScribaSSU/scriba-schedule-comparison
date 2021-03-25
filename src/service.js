import { week, time } from './utils/utils';

const urlDepartments = 'https://scribabot.ml/api/v1.0/departments';
const urlCourses = 'https://scribabot.ml/api/v1.0/group/number/';
const urlSchedule = 'https://scribabot.ml/api/v1.0/schedule/full';

export const getDataDepartments = async () => {
    const res = await fetch(urlDepartments)
        .then(response => response.json())
        .then(data => data.departmentsList.map((item) => {
            return {
                value: item.url,
                label: item.shortName,
            }
        }));
    
    return res;
}

export const getDataGroups = async (facultyUrl, educationUrl, courseUrl) => {
    const res = await fetch(`${urlCourses}/${facultyUrl}/${educationUrl}/${courseUrl}`)
        .then(response => response.json())
        .then(data => data.groupNumbers.map((item) => {
            return {
                value: item,
                label: item
            }
        }));

    return res;
}

export const getDataSchedule = async (facultyUrl, groupUrl) => {
    const res = await fetch(`${urlSchedule}/${facultyUrl}/${groupUrl}`)
        .then(response => response.json())
        .then(data => data.lessons.reverse())
        .then(reverseData => week.map((itemWeek) => {
                return time.map((time, index) => {
                    const day = reverseData.filter((itemReverseData) => itemReverseData.day.weekDay === itemWeek && itemReverseData.lessonTime.lessonNumber === index + 1);
                    if (day.length === 0) {
                        return [
                            {
                                name: '',
                                place: '',
                                subGroup: '',
                                day: {
                                    id: index + 1,
                                    dayNumber: index + 1,
                                    weekDay: itemWeek,
                                },
                                lessonTime: time.lessonTime,
                                teacher: {
                                    id: -1,
                                    surname: '',
                                    name: '',
                                    patronymic: '',
                                },
                                lessonType: '',
                            }
                        ]
                    }
                    return day.map((itemDay) => {
                        return {
                            name: itemDay.name,
                            place: itemDay.place,
                            subGroup: itemDay.subGroup,
                            day: itemDay.day,
                            lessonTime: itemDay.lessonTime,
                            teacher: itemDay.teacher,
                            lessonType: itemDay.lessonType,
                        }
                    });
                });
            }));
    
    return res;
}