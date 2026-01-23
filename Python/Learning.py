import pygame

pygame.init()
WIDTH,HEIGHT = 400,500
win = pygame.display.set_mode((WIDTH,HEIGHT))

pygame.display.set_caption('moving triangle')
#color
WHITE = (255, 255, 255)
BLUE = (0, 0, 255)
GRAY = (180,180,180)
BLACK = (0, 0, 0)

#box hero
y = 200
x = 200
width = 100
height = 100
vel = 20
#bullet
bullets = []
bullet_speed = 10
#button
left_btn = pygame.Rect(50, 430, 100, 80)
right_btn = pygame.Rect(250, 430, 100, 80)
fire_btn = pygame.Rect(450,430,100,80)

font = pygame.font.SysFont(None, 30)

run = True
clock = pygame.time.Clock()
while run:
    clock.tick(60)
    win.fill(WHITE)
    # Draw box
    pygame.draw.rect(win, BLUE, (x, y, width, height))

    # Draw buttons
    pygame.draw.rect(win, GRAY, left_btn)
    pygame.draw.rect(win, GRAY, right_btn)
    pygame.draw.rect(win, GRAY, fire_btn)

    win.blit(font.render("LEFT", True, BLACK),(75, 465))
    win.blit(font.render("RIGHT", True, BLACK),(265, 465))
    win.blit(font.render("Fire",True, BLACK),( 480,465))
    for event in pygame.event.get():
          if event.type == pygame.QUIT:
              run = False
    
          if event.type == pygame.               MOUSEBUTTONDOWN:
               if left_btn.collidepoint(event.pos) and x > 0:
                   x-=vel
               if right_btn.collidepoint(event.pos) and x < WIDTH - width:
                   x+=vel
               if fire_btn.collidepoint(event.pos) and pygame.Rect(x + width // 2 - 2, y, 4, 10):
                  bullets.append(bullet)
    
    
    pygame.display.update()

pygame.quit()

  
  
  
  
  
  
  
  
  