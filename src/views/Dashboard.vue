<template>
    <div id="dashboard">
        <transition name="fade">
            <CommentModal v-if="showCommentModal" :post="selectedPost" @close="toggleCommentModal()"></CommentModal>
    </transition>
        <section>
            <div class = "col1">
                <div class="profile">
                    <h5>{{userProfile.name}}</h5>
                    <p>{{userProfile.title}}</p>
                    <div class="create-post">
                        <p>Create a post</p>
                        <form @submit.prevent>
                            <textarea v-model.trim="post.content"></textarea>
                            <button @click="createPost()" :disabled="post.content === ''" class="button">Post</button>
                        </form>
                    </div></div></div>

                    <div class = "col2">
                        <div v-if="posts.length"> 
                            <div v-for="post in posts" :key="post.id" class="post">
                                <h5>{{post.userName}}</h5>
                                <span>{{post.createdOn | formatDate}}</span>
                                <p>{{post.content|trimLength}}</p>
                                <ul>
                                    <li><a @click="toggleCommentModal(post)">Comments {{post.comments}}</a></li>
                                    <li><a @click="likePost(post.id, post.likes)">Likes{{post.likes}}</a></li>
                                    <li><a @click="viewPost(post)">View Full Post</a></li>
                                </ul>
                            </div>
                            </div>
                            <div v-else>
                                <p class="no-results">There are no posts</p>
                            </div>
                    </div>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import  moment  from 'moment'
import CommentModal from '@/components/CommentModal'

export default {
    components:{
        CommentModal
    },
    data(){
        return{
            post:{
                content:''
            },
            showCommentModal:false,
            selectedPost:{}

        }//end of return
    },
    computed:{
        ...mapState(['userProfile', 'posts'])
    }, 
    methods:{
        createPost(){
            this.$store.dispatch('createPost', {content:this.post.content})
            this.post.content=''
        },
        toggleCommentModal(post){
            this.showCommentModal = !this.showCommentModal
            if(this.showCommentModal){
                this.selectedPost = post
            }
            else{
                this.selectedPost = {}
            }
        },
        likePost(id, likesCount){
            this.$store.dispatch('likePost', {id, likesCount})
        }
    },//end of methods
    filters: {
        formatdate(val) {
            if(!val) {  
                return '-'}
                let date = val.toDate()
                return moment(date).fromNow()
        },
        trimLength(val){
            if(val.length < 200){ return val }
            return '${val.substrinng(0,200)}...'
        }
    }//end of filters
}//end of export default
</script>

<style lang="scss" scoped>

</style>