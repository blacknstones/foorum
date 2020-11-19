package se.kth.sda.skeleton.posts;

import se.kth.sda.skeleton.comments.Comment;
import se.kth.sda.skeleton.user.User;

import javax.persistence.*;
import java.util.List;


@Entity //indicate that this object will be stored in database
public class Post {

    @Id
    // Indicate that this value will be automatically created by database as an identity key for the object
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(columnDefinition = "TEXT")
    private String body;

    private String userEmail;

    // Manage the relationship in this class
    @OneToMany
    private List<Comment> comments;

    @OneToOne
    private User user;

    // Default constructor
    protected Post() { }

    public Post(Long id, String title, String body, String userEmail) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.userEmail = userEmail;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public Long getId() {
        return id;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
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
