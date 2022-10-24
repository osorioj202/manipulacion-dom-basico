class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar() {
        console.log(this.studentName + "(" + this.studentRole + ")");
        // JuanDC (estudiante)
        // 0 likes
        // el comentario
        console.log(this.likes + " likes");
        console.log(this.content);
        }
}






// const juan1 = {
//     name: "JuanDC",
//     username: "juanDC"
//     points: 100,
//     socialMedia: {
//         twitter: "fjuandc",
//         instagram: "fjuandc",
//         facebook: "undefined",
//     },

// approvedCourses: [
//     "Curso Javascripst Basico",
//     "Programacion",
// ],

// learningPaths: [
//     {
//         name: "Escuela de Desarrollo Web",
//         courses: [
//             "Curso Javascripst Basico",
//             "Programacion",
//             "Responsive Design",
//         ],
//     },

//     {
//         name: "Escuela de Videojuegos",
//         courses: [
//             "Unreal Engine",
//             "Curso de Unioty 3D",
//             "Responsive Design",
//         ],
//     },
    
// ],
// };

// const miguel1 = {
//     name: "MIguel",
//     username: "MIguelon_123"
//     points: 100,
//     socialMedia: {
//         twitter: "MIguelon_123",
//         instagram: "MIguelon_123",
//         facebook: "undefined",
//     },

// approvedCourses: [
//     "Curso Databusiness",
//     "Curso de Dataviz",
// ],

// learningPaths: [
//     {
//         name: "Escuela de Desarrollo Web",
//         courses: [
//             "Curso Javascripst Basico",
//             "Programacion",
//             "Responsive Design",
//         ],
//     },

//     {
//         name: "Escuela de Data Science",
//         courses: [
//             "Curso Databusiness",
//             "Curso de Dataviz",
//             "Curso Tableau",

//         ],
//     },
    
// ],
// };


//SE REQUIERE DEMASIADO CODIGO PARA CREAR LOS OBJETOS ANTERIORES Y NO ES ESCALABLE

// **********************************************************************************
class learningPath {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
}
const escuelaWeb = new learningPath({
    name: "Escuela de Desarrollo Frontend",
    courses: [
        "basico", 
        "Intermedio", 
        "Avanzado"]
});

// *************************************************************************************

class Student {
    constructor({ 
        name,
        email,
        username,
        instagram = undefined ,
        twitter = undefined,
        facebook = undefined ,
        approvedCourses = [],
        learningPaths =[],

    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }


    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
}


class FreeStudent extends Student {
    constructor(props) {
        super(props);
    }

    approvedCourse(newCourse) {
        if(newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
          console.warn("lo sentimos, " + this.name + ", solo puesde tomar cursos abiertos")
        }
    }
}

class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }   

    approvedCourse(newCourse) {
        if(newCourse.lang != "english") {
            this.approvedCourses.push(newCourse);
        } else {
          console.warn("lo sentimos, " + this.name + ", no puesde tomar cursos en ingles")
        }
    }
}

class ExpertStudent extends Student {
    constructor(props) {
        super(props);
    }
    approvedCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    } 

}

class TeacherStudent extends Student {
    constructor(props) {
        super(props);
    }
    approvedCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    } 

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor",
        });
        comment.publicar();
    }
}



const juan2 = new FreeStudent({
    name: "juanO",
    username: "trismegistus",
    email: "osorioj@gmail.com",
    twitter: "oso_999"
});

// class learningPath {

// }
// const escuelaWeb = new learningPath();

const miguelo = new BasicStudent({
    name: "miguelo",
    username: "miguelistus",
    email: "miguelo@gmail.com",
    twitter: "migo_999"
});

const freddy = new TeacherStudent({
    name: "freddy v",
    username: "freddyv",
    email: "freddyv@gmail.com",
    instagram: "freddyv_999",
});

// class Course {
//     constructor({
//         name,
//         classes = [],
//     }) {
//         this._name = name;
//         this.classes = classes;
//     }
// }

//  encapsulamiento: es esconder metodods y atributos y no permitir la alteracion de los metodos y atributos
// dos formas de aplicar el encapsulamiento son los getters y setters, namespaces, object.defineProperties,
// Modulo de ES6
// *************************************************************************

// function videoPlay(id) {
//     const urlSecreta = "https//platziultrasecreto.com/" + Id;
//     console.log("se esta reproduciendo desde la url" + urlSecreta)
// }

// function videoStop(id) {
//     const urlSecreta = "https//platziultrasecreto.com/" + Id;
//     console.log("pausamos la url" + urlSecreta)
// }


// class platziClass {
//     constructor({
//         name,
//         videoID,
//     }) {
//         this.name = name;
//         this.videiID = videoID;
//     }

//     reproducir() {
//         videoPlay(this.videoID);
//     }

//     pausar() {
//         videoStop(this.videoID);
//     }
// }


//************************************************************************ */
class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish",
    }) {
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

get name() {
    return this._name;
}

set name(nuevoNombre) {
    if (nuevoNombre === "curso malo de programacion basica"){
        console.error("web...no");
    } else {
        this.name = nuevoNombre;
    }
} 
}

const cursoProgBasica = new Course({
    name: "curso gratis de programacion basica",
    isFree: true,
}); 

const cursoPracticoHTML = new Course({
    name: "curso Practico HTML Y CSS",
    lang: "english",
});

// ***********************************************************************************

// polimorfismo: sobrecarga, parametrico, inclusion.














