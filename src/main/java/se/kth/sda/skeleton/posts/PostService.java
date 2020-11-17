package se.kth.sda.skeleton.posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    private PostRepo repo;

    public List<Post> getAll() {
        return repo.findAll();
    }

    // Use Optional in case the id doesn't exist
    public Optional<Post> getById(Long id) {
        return repo.findById(id);
    }

    // repo will check if the id exists
    // if not, new Post will be created
    public Post create(Post Post) {
        return repo.save(Post);
    }
    // if yes, existed Post will be updated
    public Post update(Post updatedPost) {
        return repo.save(updatedPost);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
