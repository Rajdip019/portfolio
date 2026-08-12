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
        /** Shown as a badge when the role isn't standard full-time. */
        employmentType?: string;
    }[];
}

export interface ITechnology {
    name: string;
    icon: string;
}