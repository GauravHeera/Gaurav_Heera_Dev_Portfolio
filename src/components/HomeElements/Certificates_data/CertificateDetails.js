import wpd from "./certificates/wpd.jpg";
import php from "./certificates/php.jpg";
import mysql from "./certificates/mysql.jpg";
import angular from "./certificates/angular.jpg";
import jquery from "./certificates/jquery.jpg";

const CertificateDetails = [
    {
        id: 1,
        topic: "Web Page Designing",
        desc: "Completed a certified training program covering core web development technologies including HTML5, CSS3, and JavaScript. The course emphasized responsive design principles, semantic markup, and interactive UI behaviors, equipping learners with the skills to craft functional and visually appealing web pages.",
        img: wpd
    },
    {
        id: 2,
        topic: "PHP",
        desc: "Successfully completed certification in PHP development, covering server-side scripting, dynamic web applications, form handling, and integration with MySQL databases. The program emphasized modular code structure, secure data processing, and API connectivity, building a solid foundation for scalable backend systems.",
        img: php
    },
    {
        id: 3,
        topic: "MySQL",
        desc: "Earned formal certification in MySQL, focusing on database design, query optimization, relational modeling, and secure data handling. The course covered key concepts including CRUD operations, joins, indexing, normalization, and real-world integration with server-side languages like PHP and JavaScript—providing practical skills to build and manage scalable data-driven applications.",
        img: mysql
    },
    {
        id: 4,
        topic: "Angular.js",
        desc: "Successfully completed certification in AngularJS, gaining hands-on experience in building dynamic single-page applications (SPAs) using MVC architecture, two-way data binding, and component-based structure. The course emphasized real-time templating, routing, dependency injection, and modular code organization—preparing developers to build scalable, maintainable frontend systems with a seamless user experience.",
        img: angular
    },
    {
        id: 5,
        topic: "JQuery",
        desc: "Completed certification in jQuery, gaining expertise in DOM manipulation, event handling, animations, and AJAX integration for interactive web experiences. The course emphasized writing efficient, cross-browser JavaScript code to enhance frontend behavior, streamline UI workflows, and improve performance across web applications.",
        img: jquery
    },
];
export default CertificateDetails;

// Reusable Format
//     {
//         id: 1,
//         topic: "",
//         desc: "",
//         img: ""
//     },