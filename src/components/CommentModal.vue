<template>
    <div class="c-container">
        <a @click="$emit('close')">close</a>
        <p>Add a comment</p>
        <form @submit.prevent>
            <textarea v-model.trim="comment"></textarea>
            <button @click="addComment()" :disabled="comment == ''" class="button">Add Comment</button>
        </form>
    </div>
</template>

<script>
import {postsCollection, commentsCollection, auth} from '@/firebase'
export default {
    props: ['post'],
    data(){
        return{
            comment:''
        }
    },
    methods:{
        async addComment(){
            //First create the comment
            await commentsCollection.add({
                createdOn: new Date(),
                content: this.comment,
                postId: this.post.id,
                userId :auth.currentUser.uid,
                userName: this.$store.state.userProfile.name
            })

            //Second update comment count on original post
            await postsCollection.doc(this.post.id).update({
                comments: parseInt(this.post.comments)+1
            })
            //close modal
            this.$emit('close')
        }//end of addComment
    }//end of method
}//end of export default
</script>