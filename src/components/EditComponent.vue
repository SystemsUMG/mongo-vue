<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card bg-primary text-white border-0">
                <div class="card-body">
                    <h4 class="text-center">Editar Estudiante</h4>
                    <form @submit.prevent="handleUpdateForm">
                        <div class="form-group">
                            <label>Nombre</label>
                            <input type="text" v-model="student.name" class="form-control" required>
                        </div>
                        <div class="form-group mt-3">
                            <label>Apellido</label>
                            <input type="text" v-model="student.last_name" class="form-control" required>
                        </div>
                        <div class="form-group mt-3">
                            <label>Edad</label>
                            <input type="number" v-model="student.age" class="form-control" required>
                        </div>
                        <div class="form-group mt-3">
                            <label>Grado</label>
                            <input type="text" v-model="student.grade" class="form-control" required>
                        </div>
                        <div class="form-group mt-3">
                            <label>Estado</label>
                            <select v-model="student.status" class="form-select form-control" required>
                                <option value="" selected disabled>Seleccione una Opción</option>
                                <option value="true">Aprobado</option>
                                <option value="false">Reprobado</option>
                            </select>
                        </div>
                        <div class="text-end">
                            <button class="btn btn-warning text-end mt-3">Actualizar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                student: {
                    name: '',
                    last_name: '',
                    age: '',
                    grade: '',
                    status: '',
                }
            }
        },
        created() {
            let apiURL = `/students/${this.$route.params.id}`;
            axios.get(apiURL).then((res) => {
                this.student = res.data;
            })
        },
        methods: {
            handleUpdateForm() {
            let apiURL = `/students/${this.$route.params.id}`;
            axios.put(apiURL, this.student).then(() => {
                this.$router.push('/')
            }).catch(error => {
                console.log(error)
            });
        }
        }
    }
</script>
