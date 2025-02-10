export interface IWorkExperience {
    logo: string;
    company: string;
    link: string;
    experiences: {
        title: string;
        startDate: string;
        endDate: string;
        description: string[];
        location: string;
    }[];
}

export interface ITechnology {
    name: string;
    icon: string;
}