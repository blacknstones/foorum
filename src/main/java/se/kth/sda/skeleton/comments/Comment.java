package se.kth.sda.skeleton.comments;

import se.kth.sda.skeleton.posts.Post;
import se.kth.sda.skeleton.user.User;

import javax.persistence.*;

@Entity //indicate that this object will be stored in database
public class Comment {

    @Id
    // Indicate that this value will be automatically created by database as an identity key for the object
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String body;

    private String userEmail;

    private Long postId;

    // Default constructor
    protected Comment() { }

    public Comment(Long id, Long postId, String body, String userEmail) {
        this.id = id;
        this.postId = postId;
        this.body = body;
        this.userEmail = userEmail;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public Long getId() {
        return id;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }

    public Long getPostId() {
        return postId;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getBody() {
        return body;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserEmail() {
        return userEmail;
    }

}

