import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: '프론트엔드',
      skills: [
        { name: 'React', level: 90, color: 'bg-blue-500' },
        { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
        { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
        { name: 'HTML/CSS', level: 90, color: 'bg-orange-500' },
        { name: 'Tailwind CSS', level: 88, color: 'bg-cyan-500' },
        { name: 'Vue.js', level: 75, color: 'bg-green-500' },
      ]
    },
    {
      category: '백엔드 & 데이터베이스',
      skills: [
        { name: 'Node.js', level: 80, color: 'bg-green-600' },
        { name: 'Express.js', level: 75, color: 'bg-gray-600' },
        { name: 'MongoDB', level: 70, color: 'bg-green-500' },
        { name: 'PostgreSQL', level: 65, color: 'bg-blue-700' },
        { name: 'Firebase', level: 75, color: 'bg-orange-600' },
      ]
    },
    {
      category: '도구 & 기타',
      skills: [
        { name: 'Git', level: 85, color: 'bg-orange-600' },
        { name: 'Docker', level: 60, color: 'bg-blue-600' },
        { name: 'AWS', level: 65, color: 'bg-yellow-600' },
        { name: 'Figma', level: 70, color: 'bg-purple-500' },
        { name: 'Jest', level: 75, color: 'bg-red-500' },
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            기술 스택
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            다양한 기술을 활용하여 최고의 웹 애플리케이션을 만들어냅니다.
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-gray-900">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full ${skill.color}`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              추가 역량
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold text-xl">🚀</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">빠른 학습</h4>
                <p className="text-sm text-gray-600">새로운 기술을 빠르게 습득하고 적용</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold text-xl">🎨</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">UI/UX 디자인</h4>
                <p className="text-sm text-gray-600">사용자 경험을 고려한 인터페이스 설계</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold text-xl">📱</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">반응형 디자인</h4>
                <p className="text-sm text-gray-600">모든 디바이스에서 최적화된 경험</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold text-xl">🔧</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">문제 해결</h4>
                <p className="text-sm text-gray-600">복잡한 문제를 창의적으로 해결</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 