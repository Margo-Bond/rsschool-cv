# Margarita Bondarenko

![My Photo](foto.jpg)

## Contact Info
- **Phone:** + 381 629 381 469
- **Telegram:** [@margo_frontdev](https://t.me/margo_frontender)  
- **Email:** ritabond1991@gmail.com  
- **GitHub:** [Margo-Bond](https://github.com/Margo-Bond)  
- **Location:** Belgrade, Serbia

## Summary
I am a frontend developer focused on creating user-friendly and functional interfaces. Transitioning to IT allowed me to solve complex problems and create valuable products. I thrive in teamwork environments and continuously learn modern technologies. Passionate about developing my skills in JavaScript and React, I am eager to contribute to challenging projects and grow as a developer.

## Skills
- **Frontend:** HTML5, CSS3 (Flex, Grid, SCSS), JavaScript (ES6+), ReactJS, Next.js, TypeScript, Firebase, Tailwind CSS
- **Tools & Technologies:** Git, GitHub, Vite, npm, Figma, Trello, Atlassian Jira, Slack
- **Methodologies:** Agile, B.E.M., Cross-browser compatibility

## Code Examples
### Profession Card Component (Next.js + TypeScript)
```typescript
import React, { useEffect, useRef } from 'react'

interface ProfessionCardMobiProps {
    profession: string
    image: string
    price: string
    onWidthChange: (width: number) => void
}

const ProfessionCardMobi: React.FC<ProfessionCardMobiProps> = ({ image, profession, price, onWidthChange }) => {
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (cardRef.current) {
            onWidthChange(cardRef.current.offsetWidth)
        }
    }, [])

    return (
        <div
            ref={cardRef}
            className="flex w-[320px] flex-col rounded-[38px] bg-cover"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div>{profession}</div>
            <div>{price} BYN/неделя</div>
        </div>
    )
}

export default ProfessionCardMobi
```

## 6. Experience

### FunScrut  
**Role:** Frontend Developer  
- Developed adaptive components for mobile, desktop, and tablet devices using **Next.js**, **TypeScript**, and **Tailwind CSS**.  
- Focused on creating responsive and user-friendly interfaces.  
- Collaborated closely with design and backend teams to ensure seamless integration and optimal performance.  
- **Note:** The project is under closed access, and the source code cannot be shared.  

---

### IT Girls School, Magic Coffee Project  
**Role:** Frontend Developer  
- Built the project architecture for mobile devices using native JavaScript and Vite.  
- Developed cross-browser and adaptive UI layouts based on Figma designs using B.E.M methodology.  
- Implemented routing, form validation, and server-side integration with Firebase RealTime Database.  
- Owned the repository, merged all contributions, and provided support to team members.  
- Managed deadlines and technical quality via GitHub.  

**[Source Code](https://github.com/example/magic-coffee-project)**  

---

### IT Girls School, Psychological Counseling Project  
**Role:** Frontend Developer  
- Developed responsive UI components using React and Vite.  
- Created an admin panel and implemented seamless navigation without page reloads.  
- Collaborated daily in an Agile environment with project managers, backend developers, and QA.  

**[Source Code](https://github.com/example/psychological-counseling-project)** 

**[Live Project](https://yana-pavlyuts.on.fleek.co/)**  

---

### Pet Project: Cookie Shop  
**Role:** Frontend Developer  
- Designed and developed an online store with product filtering using TypeScript and Angular.  
- Integrated external API for fetching product data and prices.  

---

### Career Counseling Project  
**Role:** Frontend Developer  
- Developed a responsive and functional website for a career consulting service: **[nataliacareerexpert.com](https://nataliacareerexpert.com/)**.  
- Built cross-browser adaptive UI components using React and Vite.  
- Implemented seamless navigation and interactive elements to enhance user experience.  
- Worked closely with the client and the backend team to deliver the project on time.  

**[Source Code](https://github.com/Margo-Bond/career-counseling)**  

## 7. Education

- **Frontend Development Courses**
  - **RSSchool, Frontent Course**: JavaScript, React, Git and Git Bash, HTML, CSS, SCSS
  - **SoftUni (Serbia), JavaScript Course**: JavaScript
  - **IT Girls School, Frontend development**: JavaScript, React, TypeScript, NextJS, Git and Git Bash, HTML, CSS, SCSS
- **Frontend Development Courses**
  - **Saint Petersburg Polytechnic University,  Introduction to Python**

- **PhD in Biology (2018)**  
  Komarov Botanical Institute, Russian Academy of Sciences, St. Petersburg  

- **Specialist Degree in Biology (2014)**  
  Syktyvkar State University, Faculty of Chemistry and Biology  

---

## 8. English

- **Level:** B1 (Intermediate)  
  - Practical experience through professional communication in international teams.  
  - Regularly use English for documentation, technical discussions, and self-study.  
  - Frequently watch frontend development tutorials and read articles, as well as official documentation in English.  
  - Completed online course in frontend development in English (SoftUni, Serbia).