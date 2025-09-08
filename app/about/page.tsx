'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Download, Mail, Phone, MapPin, Github, Languages, Award, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll';
import { skills, skillCategories } from '@/content/skills';
import { siteConfig } from '@/site.config';

const languages = ['English', 'Gujarati', 'Hindi', 'Marathi'];
const interests = ['Mobile UI/UX', 'Performance Optimization', 'Open Source', 'Tech Mentoring', 'Cricket', 'Travel'];

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn more about my journey, skills, and what drives me to create amazing mobile experiences.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <RevealOnScroll>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center space-y-6">
                    {/* Profile Image Placeholder */}
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">
                        {siteConfig.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold">{siteConfig.name}</h2>
                      <p className="text-muted-foreground">{siteConfig.title}</p>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{siteConfig.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <Link href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                          {siteConfig.email}
                        </Link>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <Link href={`tel:${siteConfig.phone}`} className="text-primary hover:underline">
                          {siteConfig.phone}
                        </Link>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-3">
                      <Button asChild className="w-full">
                        <Link href="/resume.pdf" target="_blank">
                          <Download className="mr-2 h-4 w-4" />
                          Download Resume
                        </Link>
                      </Button>
                      <Button variant="outline" asChild className="w-full">
                        <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub Profile
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </RevealOnScroll>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <RevealOnScroll>
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>My Story</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      I'm a passionate React Native developer with 2.8+ years of experience building 
                      cross-platform mobile applications that make a real difference in people's lives. 
                      My journey began during university when I discovered the power of creating apps 
                      that could reach millions of users across both iOS and Android platforms.
                    </p>
                    <p>
                      Throughout my career, I've had the privilege of working on diverse projects—from 
                      hyperlocal discovery apps that connect communities to devotional streaming platforms 
                      that serve thousands of users daily. What drives me most is the intersection of 
                      performance and user experience, ensuring that every app I build is not just 
                      functional, but delightful to use.
                    </p>
                    <p>
                      I believe in continuous learning and staying at the forefront of mobile development. 
                      Whether it's optimizing FlatList performance, implementing complex push notification 
                      systems, or mentoring fellow developers, I'm always looking for ways to push the 
                      boundaries of what's possible in mobile development.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </RevealOnScroll>

            {/* Values */}
            <RevealOnScroll delay={0.1}>
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>What I Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Performance First</h4>
                      <p className="text-sm text-muted-foreground">
                        Every line of code matters when it comes to user experience. I obsess over 
                        metrics like crash rates, load times, and smooth animations.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">User-Centric Design</h4>
                      <p className="text-sm text-muted-foreground">
                        Technology should serve users, not complicate their lives. I focus on 
                        building intuitive interfaces that solve real problems.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Team Collaboration</h4>
                      <p className="text-sm text-muted-foreground">
                        Great products are built by great teams. I believe in knowledge sharing, 
                        mentoring, and fostering a collaborative development culture.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Continuous Growth</h4>
                      <p className="text-sm text-muted-foreground">
                        The tech landscape evolves rapidly. I stay curious, embrace new tools, 
                        and constantly refine my craft to deliver cutting-edge solutions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </RevealOnScroll>
          </div>
        </div>

        {/* Skills Section */}
        <RevealOnScroll delay={0.2}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => {
                const categorySkills = skills.filter(skill => skill.category === category);
                
                return (
                  <Card key={category} className="border-0 shadow-md">
                    <CardHeader>
                      <CardTitle className="text-lg">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {categorySkills.map((skill) => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">{skill.name}</span>
                              <span className="text-xs text-muted-foreground">{skill.level}%</span>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>

        {/* Languages & Interests */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <RevealOnScroll delay={0.3}>
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Languages className="h-5 w-5" />
                  <span>Languages</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {languages.map((language) => (
                    <Badge key={language} variant="secondary">
                      {language}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </RevealOnScroll>

          <RevealOnScroll delay={0.4}>
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Coffee className="h-5 w-5" />
                  <span>Interests</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <Badge key={interest} variant="outline">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}