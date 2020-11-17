package se.kth.sda.skeleton.posts;

import se.kth.sda.skeleton.comments.Comment;

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

    private String userName;

    // Manage the relationship in this class
    @OneToMany
    private List<Comment> comments;

    // Default constructor
    protected Post() { }

    public Post(Long id, String title, String body, String userName) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.userName = userName;
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

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserName() {
        return userName;
    }
    
}
