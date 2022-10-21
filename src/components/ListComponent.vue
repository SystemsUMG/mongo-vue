<template>
    <div class="container-xl">
        <div class="table-responsive">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col-sm-6">
                            <h2><b>Estudiantes</b></h2>
                        </div>
                        <div class="col-sm-6">
                            <router-link type="button" to="/create-student" class="btn btn-styled btn-success">
                                <i class="bi bi-plus-circle-fill"></i>
                                <span class="pt-1">Agregar</span>
                            </router-link>				
                        </div>
                    </div>
                </div>
                <table class="table table-dark table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Edad</th>
                            <th scope="col">Grado</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(student, index,) in Students" :key="student._id">
                            <th scope="row">{{ index+1 }}</th>
                            <td>{{ student.name }}</td>
                            <td>{{ student.last_name }}</td>
                            <td class="text-start">{{ student.age }}</td>
                            <td>{{ student.grade }}</td>
                            <td>
                                <span class="badge bg-primary" v-if="student.status == 'true'">Aprobado</span>
                                <span class="badge bg-danger" v-else>Reprobado</span>
                            </td>
                            <td>
                                <button @click.prevent="deleteStudent(student._id)" class="btn btn-sm btn-danger">Borrar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from "axios"
    export default {
        data() {
            return {
                Students: []
            }
        },
        created() {
            let apiURL = '/students';
            axios.get(apiURL).then(res => {
                this.Students = res.data;
            }).catch(error => {
                console.log(error)
            })
        },
        methods: {
            deleteStudent(id){
                let apiURL = `students/${id}`;
                let indexOfArrayItem = this.Students.findIndex(i => i._id === id);
                if (window.confirm("¿Desea eliminar el registro?")) {
                    axios.delete(apiURL).then(() => {
                        this.Students.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    })
                }
            }
        }
    }
</script>