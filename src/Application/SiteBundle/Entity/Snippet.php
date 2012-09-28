<?php

namespace Application\SiteBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Application\SiteBundle\Entity\Snippet
 *
 * @ORM\Table(name="snippet")
 * @ORM\Entity(repositoryClass="Application\SiteBundle\Entity\SnippetRepository")
 * @ORM\HasLifecycleCallbacks
 */
class Snippet
{
    /**
     * @var integer $id
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string $title
     *
     * @ORM\Column(name="title", type="string", length=255)
     */
    private $title;

    /**
     * @var string $syntax
     *
     * @ORM\Column(name="syntax", type="string", length=255)
     */
    private $syntax;

    /**
     * @var \DateTime $createdAt
     *
     * @ORM\Column(name="createdAt", type="datetime")
     */
    private $createdAt;

    /**
     * @var \DateTime $updatedAt
     *
     * @ORM\Column(name="updatedAt", type="datetime")
     */
    private $updatedAt;

    /**
     * @var string $contrnt
     *
     * @ORM\Column(name="content", type="text")
     */
    private $content;

    /**
     * @ORM\ManyToMany(targetEntity="Tag", inversedBy="snippets")
     * @ORM\JoinTable(name="snippets_tags")
     **/
    private $tags;
    /**
     * Constructor
     */
    public function __construct()
    {
        $this->tags = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * @ORM\PrePersist
     */
    public function handlePrePersist()
    {        
        $this->createdAt = new \DateTime;
        $this->updatedAt = new \DateTime;
    }

    /**
     * @ORM\PreUpdate
     */
    public function handlePreUpdate()
    {
        $this->updated_at = new \DateTime;
    }
    
    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set title
     *
     * @param string $title
     * @return Snippet
     */
    public function setTitle($title)
    {
        $this->title = $title;
    
        return $this;
    }

    /**
     * Get title
     *
     * @return string 
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set syntax
     *
     * @param string $syntax
     * @return Snippet
     */
    public function setSyntax($syntax)
    {
        $this->syntax = $syntax;
    
        return $this;
    }

    /**
     * Get syntax
     *
     * @return string 
     */
    public function getSyntax()
    {
        return $this->syntax;
    }

    /**
     * Set createdAt
     *
     * @param \DateTime $createdAt
     * @return Snippet
     */
    public function setCreatedAt($createdAt)
    {
        $this->createdAt = $createdAt;
    
        return $this;
    }

    /**
     * Get createdAt
     *
     * @return \DateTime 
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * Set updatedAt
     *
     * @param \DateTime $updatedAt
     * @return Snippet
     */
    public function setUpdatedAt($updatedAt)
    {
        $this->updatedAt = $updatedAt;
    
        return $this;
    }

    /**
     * Get updatedAt
     *
     * @return \DateTime 
     */
    public function getUpdatedAt()
    {
        return $this->updatedAt;
    }

    /**
     * Add tags
     *
     * @param Application\SiteBundle\Entity\Tag $tags
     * @return Snippet
     */
    public function addTag(\Application\SiteBundle\Entity\Tag $tags)
    {
        $this->tags[] = $tags;
    
        return $this;
    }

    /**
     * Remove tags
     *
     * @param Application\SiteBundle\Entity\Tag $tags
     */
    public function removeTag(\Application\SiteBundle\Entity\Tag $tags)
    {
        $this->tags->removeElement($tags);
    }

    /**
     * Get tags
     *
     * @return Doctrine\Common\Collections\Collection 
     */
    public function getTags()
    {
        return $this->tags;
    }

    /**
     * Set content
     *
     * @param string $content
     * @return Snippet
     */
    public function setContent($content)
    {
        $this->content = $content;
    
        return $this;
    }

    /**
     * Get content
     *
     * @return string 
     */
    public function getContent()
    {
        return $this->content;
    }
}