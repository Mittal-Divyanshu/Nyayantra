const mongoose = require('mongoose');
const Right = require('../model/rights');

// Connect to MongoDB
const MONGO_URL = "mongodb://127.0.0.1:27017/constitution";

async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

// Seed data
// Seed data with detailed Fundamental Rights and additional rights
const rightsData = [
    {
        title: 'Fundamental Rights',
        slug: 'fundamental-rights',
        description: 'Fundamental Rights are the basic human rights enshrined in the Constitution of India which are guaranteed to all citizens. They are essential for the development of an individual and the protection of personal freedoms. These rights ensure the dignity of the individual and form the cornerstone of democracy.',
        details: [
            {
                articleTitle: 'Article 14 - Right to Equality',
                articleDescription: 'Article 14 guarantees that the State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.'
            },
            {
                articleTitle: 'Article 15 - Prohibition of Discrimination',
                articleDescription: 'Article 15 prohibits discrimination on grounds of religion, race, caste, sex, or place of birth. It ensures that no citizen is denied access to public places or services on these grounds.'
            },
            {
                articleTitle: 'Article 16 - Equality of Opportunity in Public Employment',
                articleDescription: 'Article 16 provides for equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State, ensuring that there is no discrimination in recruitment and promotion.'
            },
            {
                articleTitle: 'Article 17 - Abolition of Untouchability',
                articleDescription: 'Article 17 abolishes untouchability and forbids its practice in any form. It provides that any discrimination based on untouchability is an offense.'
            },
            {
                articleTitle: 'Article 18 - Abolition of Titles',
                articleDescription: 'Article 18 abolishes titles and forbids the State from conferring titles on individuals except for military or academic distinctions, thus maintaining the equality of citizens.'
            },
            {
                articleTitle: 'Article 19 - Protection of Certain Rights Regarding Freedom of Speech, etc.',
                articleDescription: 'Article 19 guarantees the right to freedom of speech and expression, assembly, association, movement, residence, and profession. These rights are subject to reasonable restrictions in the interests of public order, morality, and security of the State.'
            },
            {
                articleTitle: 'Article 20 - Protection in Respect of Conviction for Offenses',
                articleDescription: 'Article 20 provides protection against arbitrary and retrospective prosecution and punishment, ensuring that no one can be convicted for an offense that was not an offense at the time it was committed.'
            },
            {
                articleTitle: 'Article 21 - Protection of Life and Personal Liberty',
                articleDescription: 'Article 21 guarantees that no person shall be deprived of their life or personal liberty except according to the procedure established by law. This article is the cornerstone of individual rights and freedoms.'
            },
            {
                articleTitle: 'Article 22 - Protection Against Arrest and Detention in Certain Cases',
                articleDescription: 'Article 22 provides safeguards against arbitrary arrest and detention. It guarantees the right to be informed of the grounds of arrest, the right to consult a legal practitioner, and the right to be produced before a magistrate within 24 hours.'
            },
            {
                articleTitle: 'Article 23 - Prohibition of Traffic in Human Beings and Forced Labor',
                articleDescription: 'Article 23 prohibits human trafficking and forced labor. It mandates punishment for those involved in practices of trafficking or forced labor.'
            },
            {
                articleTitle: 'Article 24 - Prohibition of Employment of Children in Factories, etc.',
                articleDescription: 'Article 24 prohibits the employment of children below the age of 14 years in hazardous occupations and factories, protecting them from exploitation.'
            },
            {
                articleTitle: 'Article 25 - Freedom of Conscience and Free Profession, Practice, and Propagation of Religion',
                articleDescription: 'Article 25 guarantees freedom of conscience and the right to profess, practice, and propagate religion. This right is subject to public order, morality, and health.'
            },
            {
                articleTitle: 'Article 26 - Freedom to Manage Religious Affairs',
                articleDescription: 'Article 26 guarantees the freedom to manage religious affairs, allowing individuals to establish and maintain institutions for religious and charitable purposes.'
            },
            {
                articleTitle: 'Article 27 - Freedom from Taxation for Promotion of any Religion',
                articleDescription: 'Article 27 prohibits the use of public funds for promoting or maintaining any particular religion, ensuring that the State remains neutral in matters of religion.'
            },
            {
                articleTitle: 'Article 28 - Freedom from Attending Religious Instruction',
                articleDescription: 'Article 28 guarantees the right not to be compelled to attend religious instruction or worship in any educational institution maintained by the State.'
            },
            {
                articleTitle: 'Article 29 - Protection of Interests of Minorities',
                articleDescription: 'Article 29 protects the interests of minorities by allowing them to conserve their culture, language, or script. It also ensures that no minority is denied admission to educational institutions maintained by the State.'
            },
            {
                articleTitle: 'Article 30 - Right of Minorities to Establish and Administer Educational Institutions',
                articleDescription: 'Article 30 guarantees the right of minorities to establish and administer educational institutions of their choice. This right is aimed at preserving the cultural and educational rights of minority communities.'
            },
            {
                articleTitle: 'Article 32 - Right to Constitutional Remedies',
                articleDescription: 'Article 32 provides the right to move the Supreme Court for the enforcement of Fundamental Rights, ensuring that there are remedies available for the violation of these rights.'
            }
        ]
    },
    {
        title: 'Legal Rights',
        slug: 'legal-rights',
        description: 'Legal rights are those rights conferred upon citizens by specific laws enacted by the State. These rights ensure protection and justice through the legal framework and statutory provisions.',
        details: [
            {
                articleTitle: 'Consumer Protection Rights',
                articleDescription: 'Rights under the Consumer Protection Act include the right to be informed about goods and services, the right to choose, the right to be heard, and the right to seek redress. This ensures fairness in the marketplace and protection against exploitation.'
            },
            {
                articleTitle: 'Right to Information Act, 2005',
                articleDescription: 'This Act empowers citizens to request information from public authorities, ensuring transparency and accountability in governance.'
            },
            {
                articleTitle: 'The Right of Children to Free and Compulsory Education Act, 2009',
                articleDescription: 'This Act mandates free and compulsory education for children aged 6 to 14 years and seeks to improve the quality of education.'
            }
        ]
    },
    {
        title: 'Women\'s Rights',
        slug: 'womens-rights',
        description: 'Women\'s rights in India encompass legal protections for equality, safety, and empowerment. Key rights include the right to education, employment, property, and equal pay. Laws address violence, such as domestic abuse and sexual harassment, while affirmative action policies promote women\'s representation in politics and public life, ensuring gender equality.',
        details: [
            {
                articleTitle: 'Equal Remuneration Act, 1976',
                articleDescription: 'This Act mandates equal pay for equal work and prohibits discrimination on the basis of sex in employment matters.'
            },
            {
                articleTitle: 'Protection of Women from Domestic Violence Act, 2005',
                articleDescription: 'This Act provides protection to women from domestic violence and establishes legal remedies, including protection orders and the right to reside in a shared household.'
            },
            {
                articleTitle: 'Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act, 2013',
                articleDescription: 'This Act addresses sexual harassment at the workplace by providing mechanisms for complaint and redressal, and mandates the establishment of internal complaints committees.'
            },
            {
                articleTitle: 'Maternity Benefit Act, 1961',
                articleDescription: 'This Act provides maternity leave and benefits to women employed in factories, establishments, and other workplaces, ensuring financial support during maternity leave.'
            },
            {
                articleTitle: 'The Dowry Prohibition Act, 1961',
                articleDescription: 'This Act prohibits the giving or taking of dowry in marriages and prescribes penalties for violators, aiming to eliminate dowry-related abuses.'
            },
            {
                articleTitle: 'Women Reservation in Panchayats and Municipalities',
                articleDescription: 'Laws and policies provide for a certain percentage of seats reserved for women in local self-government institutions to ensure their participation in decision-making and governance.'
            },
            {
                articleTitle: 'The Prohibition of Child Marriage Act, 2006',
                articleDescription: 'This Act aims to prevent child marriages by setting legal minimum age limits for marriage and providing penalties for violations.'
            }
        ]
    },
    {
        title: 'Children\'s Rights',
        slug: 'childrens-rights',
        description: 'Children\'s rights include their right to association with both parents, human identity, and basic needs for physical protection. These rights are crucial for ensuring the well-being and development of children.',
        details: [
            {
                articleTitle: 'Right to Free and Compulsory Education Act, 2009',
                articleDescription: 'This Act provides for free and compulsory education to children aged 6 to 14 years, aiming to improve literacy and educational outcomes for all children.'
            },
            {
                articleTitle: 'The Juvenile Justice (Care and Protection of Children) Act, 2015',
                articleDescription: 'This Act deals with the care and protection of children in need, including those in conflict with the law, ensuring their rehabilitation and social reintegration.'
            },
            {
                articleTitle: 'The Child Labour (Prohibition and Regulation) Act, 1986',
                articleDescription: 'This Act prohibits the employment of children in hazardous occupations and regulates the conditions of work for children in non-hazardous industries.'
            }
        ]
    },
    {
        title: 'Rights for Persons with Disabilities',
        slug: 'disabilities-rights',
        description: 'Rights for persons with disabilities ensure equal opportunity and access to various aspects of life. These rights cover education, employment, and accessibility to public spaces, aiming to integrate persons with disabilities fully into society.',
        details: [
            {
                articleTitle: 'Rights of Persons with Disabilities Act, 2016',
                articleDescription: 'This Act provides for equal opportunities, protection of rights, and full participation of persons with disabilities in all aspects of life. It also mandates accessibility and non-discrimination in various fields.'
            },
            {
                articleTitle: 'National Trust Act, 1999',
                articleDescription: 'This Act establishes a national trust for the welfare of persons with disabilities, focusing on their care, protection, and rehabilitation.'
            }
        ]
    },
    {
        title: 'Environmental Rights',
        slug: 'environmental-rights',
        description: 'Environmental rights are rights related to the protection and preservation of the environment. These rights ensure that individuals and communities can live in a healthy and sustainable environment.',
        details: [
            {
                articleTitle: 'Environment Protection Act, 1986',
                articleDescription: 'This Act aims to provide for the protection and improvement of the environment and for matters connected therewith. It is the umbrella legislation for environmental management in India.'
            },
            {
                articleTitle: 'The National Green Tribunal Act, 2010',
                articleDescription: 'This Act establishes the National Green Tribunal to handle environmental disputes and enforce environmental laws and policies.'
            },
            {
                articleTitle: 'The Water (Prevention and Control of Pollution) Act, 1974',
                articleDescription: 'This Act provides for the prevention and control of water pollution and the maintaining or restoring of wholesomeness of water.'
            }
        ]
    },
    {
        title: 'Consumer Rights',
        slug: 'consumer-rights',
        description: 'Consumer rights protect individuals when purchasing goods and services, ensuring fairness and safety. These rights provide mechanisms for addressing grievances and seeking redress.',
        details: [
            {
                articleTitle: 'Consumer Protection Act, 2019',
                articleDescription: 'This Act provides for the establishment of Consumer Disputes Redressal Commissions and the creation of the Central Consumer Protection Authority to handle consumer grievances and promote consumer protection.'
            },
            {
                articleTitle: 'The Consumer Protection (E-Commerce) Rules, 2020',
                articleDescription: 'These rules regulate e-commerce businesses and ensure that online consumers receive adequate protection and recourse for grievances.'
            }
        ]
    },
    {
        title: 'Land and Property Rights',
        slug: 'land-property-rights',
        description: 'Land and property rights involve the legal rights to own, use, and transfer land and property. These rights are fundamental to personal security and economic development.',
        details: [
            {
                articleTitle: 'Transfer of Property Act, 1882',
                articleDescription: 'This Act governs the transfer of property by sale, mortgage, lease, or gift, providing a legal framework for property transactions.'
            },
            {
                articleTitle: 'The Registration Act, 1908',
                articleDescription: 'This Act mandates the registration of documents related to property transactions to ensure legal validity and protect property rights.'
            }
        ]
    },
    {
        title: 'Animal Rights',
        slug: 'animal-rights',
        description: 'Animal rights focus on the ethical treatment of animals and their protection from exploitation and harm. These rights advocate for humane treatment and welfare of animals.',
        details: [
            {
                articleTitle: 'Prevention of Cruelty to Animals Act, 1960',
                articleDescription: 'This Act aims to prevent the infliction of unnecessary pain or suffering on animals and promotes their welfare through legal measures.'
            },
            {
                articleTitle: 'The Animal Welfare Board of India Act, 1962',
                articleDescription: 'This Act establishes the Animal Welfare Board of India to promote animal welfare and to advise the government on matters related to animal care and protection.'
            }
        ]
    },
    {
        title: 'Refugees and Migrant Rights',
        slug: 'refugee-migrant-rights',
        description: 'Refugees and migrant rights involve the protection and support for individuals who are forced to leave their homes due to conflict, persecution, or other crises. These rights ensure their safety, dignity, and access to basic needs during displacement.',
        details: [
            {
                articleTitle: 'United Nations High Commissioner for Refugees (UNHCR) Guidelines',
                articleDescription: 'UNHCR provides guidelines and support for the protection and assistance of refugees and internally displaced persons, including measures for their safety, legal status, and integration into host communities.'
            },
            {
                articleTitle: 'The Refugee Convention, 1951',
                articleDescription: 'This international treaty defines who is a refugee, their rights, and the legal obligations of states to protect them. It sets out the principles of non-refoulement and provides a framework for refugee protection.'
            },
            {
                articleTitle: 'International Organization for Migration (IOM) Guidelines',
                articleDescription: 'IOM provides guidelines and support for the protection of migrants, including assistance with integration, health care, and rights advocacy to ensure humane treatment of migrants globally.'
            }
        ]
    },
    {
        title: 'Healthcare Rights',
        slug: 'healthcare-rights',
        description: 'Healthcare rights ensure that individuals have access to medical care and services necessary for their well-being. These rights include the right to receive timely and appropriate healthcare services and to be protected from discrimination in the provision of health services.',
        details: [
            {
                articleTitle: 'National Health Policy, 2017',
                articleDescription: 'This policy aims to achieve the highest possible level of health and well-being for all citizens through universal access to healthcare services, with an emphasis on prevention, primary care, and health promotion.'
            },
            {
                articleTitle: 'The Clinical Establishments (Registration and Regulation) Act, 2010',
                articleDescription: 'This Act provides for the registration and regulation of clinical establishments to ensure quality healthcare services and protect patients’ rights.'
            },
            {
                articleTitle: 'The Rights of Persons with Disabilities Act, 2016',
                articleDescription: 'This Act ensures that persons with disabilities have access to healthcare facilities and services, including provisions for the necessary accommodations and support to meet their health needs.'
            }
        ]
    },
    {
        title: 'Rights for Backward Classes',
        slug: 'backward-rights',
        description: 'Rights for backward classes ensure social and economic equality for groups historically disadvantaged in society. These rights include affirmative action measures designed to improve their access to education, employment, and political representation.',
        details: [
            {
                articleTitle: 'Reservation Policies',
                articleDescription: 'Reservation policies provide affirmative action in education, employment, and politics for backward classes to ensure their representation and advancement. This includes reserved seats in educational institutions and government jobs, as well as in legislatures.'
            },
            {
                articleTitle: 'Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act, 1989',
                articleDescription: 'This Act aims to prevent atrocities and discrimination against Scheduled Castes and Scheduled Tribes by providing legal remedies and protections against violence and exploitation.'
            },
            {
                articleTitle: 'The National Commission for Backward Classes Act, 1993',
                articleDescription: 'This Act establishes the National Commission for Backward Classes to oversee the implementation of policies and measures aimed at the welfare of backward classes and to address their grievances.'
            }
        ]
    }
];


// Insert data
Right.insertMany(rightsData)
    .then(() => {
        console.log("Rights data seeded successfully");
        mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    });
