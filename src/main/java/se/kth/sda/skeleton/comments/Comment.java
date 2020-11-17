package se.kth.sda.skeleton.comments;

import se.kth.sda.skeleton.posts.Post;
import javax.persistence.*;

@Entity //indicate that this object will be stored in database
public class Comment {

    @Id
    // Indicate that this value will be automatically created by database as an identity key for the object
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String body;

    private String userName;

    @ManyToOne
    private Post post;

    // Default constructor
    protected Comment() { }

    public Comment(Long id, String body, String userName) {
        this.id = id;
        this.body = body;
        this.userName = userName;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public Long getId() {
        return id;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getBody() {
        return body;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserName() {
        return userName;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    public Post getPost() {
        return post;
    }
}

