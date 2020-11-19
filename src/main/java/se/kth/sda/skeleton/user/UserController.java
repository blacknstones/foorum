package se.kth.sda.skeleton.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import se.kth.sda.skeleton.auth.AuthService;

@RestController
public class UserController {
    private UserService userService;

    private AuthService authService;

    public UserController(@Autowired UserService userService, @Autowired AuthService authService) {
        this.userService = userService;
        this.authService = authService;
    }

    @GetMapping("/user/me")
    public User getCurrentUser() {
        String email = authService.getLoggedInUserEmail();
        return userService.findUserByEmail(email);
    }

}

